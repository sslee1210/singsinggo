import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import storageEditStyle from "./StorageInput.module.css";

const StorageEdit = () => {
  let { index } = useParams();
  index = Number(index);
  const navigate = useNavigate();

  const loadFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const memoList = localStorage.getItem(`memoList_${user.username}`);
    try {
      return memoList ? JSON.parse(memoList) : [];
    } catch (err) {
      console.error("Error parsing memoList from localStorage:", err);
      return [];
    }
  };

  const memoList = loadFromLocalStorage();

  const [fridgeName, setFridgeName] = useState(
    memoList[index] ? memoList[index].fridgeName : ""
  );
  const [memo, setMemo] = useState(memoList[index] ? memoList[index].memo : "");

  const handleFridgeNameChange = (e) => {
    setFridgeName(e.target.value);
    const updatedMemoList = [...memoList];
    updatedMemoList[index] = { fridgeName: e.target.value, memo };
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      `memoList_${user.username}`,
      JSON.stringify(updatedMemoList)
    );
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
    const updatedMemoList = [...memoList];
    updatedMemoList[index] = { fridgeName, memo: e.target.value };
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      `memoList_${user.username}`,
      JSON.stringify(updatedMemoList)
    );
  };

  const handleUpdate = () => {
    if (fridgeName.trim() === "" || memo.trim() === "") {
      alert("냉장고 이름과 메모를 모두 입력해주세요.");
      return;
    }

    navigate("/fridge");
  };

  const handleDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const updatedMemoList = [...memoList];
      updatedMemoList.splice(index, 1);
      const user = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem(
        `memoList_${user.username}`,
        JSON.stringify(updatedMemoList)
      );
      navigate("/fridge");
    }
  };

  const path = process.env.PUBLIC_URL;

  return (
    <>
      <div className={storageEditStyle.storageWrapper}>
        <header className={storageEditStyle.header}>
          <Link to="/fridge">
            <button className={storageEditStyle.upperBackBtn}>취소</button>
          </Link>
          <h2 className={storageEditStyle.resisterTitle}>싱싱고 수정하기</h2>
        </header>
        <div className={storageEditStyle.storageInputWrapper}>
          <div className={storageEditStyle.InnerInputWrapper}>
            <input
              type="text"
              placeholder="싱싱고 이름 입력 (최대 10자)"
              value={fridgeName}
              onChange={handleFridgeNameChange}
              className={storageEditStyle.storageNameInput}
              maxLength="10"
            />
            <div className={storageEditStyle.storageMemoWrapper}>
              <img
                src={path + "/images/fridge_magnet.svg"}
                className={storageEditStyle.orangeMagnet}
              />
              <textarea
                placeholder="간단한 메모 입력"
                value={memo}
                onChange={handleMemoChange}
                className={storageEditStyle.storageMemoInput}></textarea>
            </div>
            <div className={storageEditStyle.backMemo}></div>
            <button onClick={handleUpdate} className={storageEditStyle.saveBtn}>
              저장
            </button>
            <button
              onClick={handleDelete}
              className={storageEditStyle.deleteBtn}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageEdit;
