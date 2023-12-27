import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Food.module.css";
const Food = () => {
  const path = process.env.PUBLIC_URL;
  const [foodList, setFoodList] = useState(() => {
    const savedList = localStorage.getItem("foodList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [sortedFoodList, setSortedFoodList] = useState(foodList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("전체");
  const categoryOptions = ["전체", "냉동", "냉장", "실온"];
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("foodList", JSON.stringify(foodList));
    setSortedFoodList(foodList);
  }, [foodList]);

  const sortFoods = (method) => {
    if (method === "name") {
      setSortedFoodList(
        [...foodList].sort((a, b) => a.foodName.localeCompare(b.foodName))
      );
    } else if (method === "expirationDate") {
      setSortedFoodList(
        [...foodList].sort(
          (a, b) => new Date(a.expirationDate) - new Date(b.expirationDate)
        )
      );
    } else if (method === "purchaseDate") {
      setSortedFoodList(
        [...foodList].sort(
          (a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate)
        )
      );
    }
  };

  // 카테고리 이미지 설정
  const categoryIMG = {
    냉장: "/images/category_fridge.svg",
    냉동: "/images/category_freezer.svg",
    실온: "/images/category_room.svg",
  };

  const deleteFood = () => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      const newList = foodList.filter((_, i) => i !== editingIndex);
      setFoodList(newList);
      localStorage.setItem("foodList", JSON.stringify(newList));
      closeModal(); // 삭제 후 모달 닫기
    }
  };

  const openModal = (food, index) => {
    // 수정: 정확한 index 값을 전달하도록 수정
    const foodIndex = foodList.findIndex((f) => f === food);
    setEditingIndex(foodIndex);
    setEditingFood({ ...food });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChanges = () => {
    const newList = [...foodList];
    newList[editingIndex] = editingFood;
    setFoodList(newList);
    closeModal();
  };

  return (
    <div className={styles.foodContainer}>
      <Link to="/">
        <img
          src={path + "/images/food_back.svg"}
          alt="뒤로가기"
          className={styles.back}
        />
      </Link>
      <h2 className={styles.title}>보관 중인 식재료</h2>
      <input
        type="text"
        placeholder="원하는 식재료를 찾아보세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBox}
      />
      <div className={styles.listContainer}>
        <ul className={styles.category}>
          {categoryOptions.map((category, index) => (
            <li
              key={index}
              className={categoryFilter === category ? styles.active : ""}
              onClick={() => setCategoryFilter(category)}>
              {category}
            </li>
          ))}
        </ul>

        <select
          onChange={(e) => sortFoods(e.target.value)}
          className={styles.select}>
          <option value="">정렬 선택</option>
          <option value="name">가나다순</option>
          <option value="expirationDate">유통기한순</option>
          <option value="purchaseDate">구매일순</option>
        </select>
        <div className={styles.itemWrap}>
          {foodList.length === 0 ? (
            <div className={styles.emptyWrapper}>
              <h2 className={styles.emptyMemoFirst}>저장된 식재료가 없어요</h2>
              <p className={styles.emptyMemoSecond}>식재료 저장을 원한다면</p>
              <p className={styles.emptyMemoThird}>하단 추가 메뉴를 클릭 :)</p>
            </div>
          ) : (
            sortedFoodList
              .filter((food) =>
                categoryFilter === "전체"
                  ? true
                  : food.category === categoryFilter
              )
              .filter((food) => food.foodName.includes(searchTerm))
              .map((food, index) => {
                const DDay = () => {
                  const expirationDate = new Date(food.expirationDate);
                  const todayDate = new Date();
                  const timeDifference = todayDate - expirationDate;
                  const diffDays = Math.floor(
                    timeDifference / (1000 * 60 * 60 * 24)
                  );

                  return diffDays === 0
                    ? "D-DAY"
                    : diffDays < 0
                    ? `D${diffDays}`
                    : `D+${diffDays}`;
                };
                const diffDays = DDay();
                console.log(diffDays);

                return (
                  <div key={index}>
                    <div
                      key={index}
                      className={styles.foodItem}
                      onClick={() => openModal(food, index)}>
                      <img
                        src={path + categoryIMG[food.category]}
                        alt={food.category}
                      />
                      <p className={styles.place}>{food.category}</p>
                      <h4>
                        {food.foodName} ({food.quantity})
                      </h4>
                      <div className={styles.textBox}>
                        <p>구매일 | {food.purchaseDate}</p>
                        <p>소비기간 | {food.expirationDate}</p>
                      </div>
                      <p
                        className={styles.DDay}
                        /* style={{
                          color: diffDays <= 3 ? "#FF6E6E" : "#00c8f4",
                        }} */
                      >
                        {diffDays}
                      </p>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <img
              src={path + "/images/food_back_blue.svg"}
              alt="뒤로가기"
              className={styles.back}
              onClick={closeModal}
            />
            <h2>싱싱고 수정하기</h2>
            <label>
              <select
                value={editingFood.category}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, category: e.target.value })
                }>
                {categoryOptions.map(
                  (category, index) =>
                    category !== "전체" && (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    )
                )}
              </select>
            </label>
            <label className={styles.editName}>
              <span>식재료명</span>
              <input
                type="text"
                value={editingFood.foodName}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, foodName: e.target.value })
                }
              />
            </label>
            <label className={styles.editNum}>
              <span>수량</span>
              <input
                type="number"
                value={editingFood.quantity}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, quantity: e.target.value })
                }
                required
              />
            </label>
            <div className={styles.dateBox}>
              <label>
                <span>구매일</span>
                <input
                  type="date"
                  value={editingFood.purchaseDate}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      purchaseDate: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                <span>소비기간</span>
                <input
                  type="date"
                  value={editingFood.expirationDate}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      expirationDate: e.target.value,
                    })
                  }
                  required
                />
              </label>
            </div>
            <label className={styles.editMemo}>
              <span>메모</span>
              <textarea
                value={editingFood.note}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, note: e.target.value })
                }
              />
            </label>
            <div className={styles.btnBox}>
              <button onClick={() => deleteFood()} className={styles.del}>
                삭제
              </button>
              <button onClick={saveChanges} className={styles.save}>
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
