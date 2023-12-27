import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FoodAdd.module.css";

const FoodAdd = ({ setFoodList }) => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("냉동");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foodName || !quantity || !purchaseDate || !expirationDate) {
      alert("모든 항목을 입력하세요.");
      return;
    }
    const newFood = {
      foodName,
      quantity,
      purchaseDate,
      expirationDate,
      note,
      category,
    };
    const savedList = localStorage.getItem("foodList");
    const foodList = savedList ? JSON.parse(savedList) : [];
    const newList = [...foodList, newFood];
    localStorage.setItem("foodList", JSON.stringify(newList));
    setFoodList(newList);
    navigate("/food");
  };

  return (
    <div className={styles.foodAdd}>
      <div className={styles.addBox}>
        <h2>싱싱고 채우기</h2>
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="냉동">냉동</option>
            <option value="냉장">냉장</option>
            <option value="실온">실온</option>
          </select>
          <label className={styles.foodName}>
            <span>식재료 이름</span>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="식재료 이름"
            />
          </label>

          <label className={styles.foodNum}>
            <span>수량</span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="수량"
            />
          </label>
          <div className={styles.dateBox}>
            <label className={styles.purchaseDate}>
              <span>구매일</span>
              <input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                placeholder="구매일"
              />
            </label>

            <label className={styles.expirationDate}>
              <span>소비기간</span>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="소비기간"
              />
            </label>
          </div>
          <label className={styles.foodMemo}>
            <span>메모</span>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} />
          </label>

          <div className={styles.btnBox}>
            <button type="button">
              <Link to="/food">취소</Link>
            </button>
            <button type="submit" className={styles.save}>
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodAdd;
