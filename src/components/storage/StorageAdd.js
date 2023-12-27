import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import storageInputStyle from "./StorageInput.module.css";

const StorageAdd = () => {
  const [fridgeName, setFridgeName] = useState("");
  const [memo, setMemo] = useState("");
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

  const handleFridgeNameChange = (e) => {
    setFridgeName(e.target.value);
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleSave = () => {
    if (fridgeName.trim() === "" || memo.trim() === "") {
      alert("냉장고 이름과 메모를 모두 입력해주세요.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const newMemoList = [...memoList, { fridgeName, memo }];
    localStorage.setItem(
      `memoList_${user.username}`,
      JSON.stringify(newMemoList)
    );

    setFridgeName("");
    setMemo("");
    navigate("/fridge");
  };
  const path = process.env.PUBLIC_URL;

  return (
    <>
      <div className={storageInputStyle.storageWrapper}>
        <header className={storageInputStyle.header}>
          <h2 className={storageInputStyle.resisterTitle}>싱싱고 추가하기</h2>
        </header>
        <div className={storageInputStyle.storageInputWrapper}>
          <div className={storageInputStyle.InnerInputWrapper}>
            <input
              type="text"
              placeholder="싱싱고 이름 입력 (최대 10자)"
              value={fridgeName}
              onChange={handleFridgeNameChange}
              className={storageInputStyle.storageNameInput}
              maxLength="10"
            />
            <div className={storageInputStyle.storageMemoWrapper}>
              <img
                src={path + "/images/fridge_magnet.svg"}
                className={storageInputStyle.orangeMagnet}
              />
              <textarea
                placeholder="간단한 메모 입력"
                value={memo}
                onChange={handleMemoChange}
                className={storageInputStyle.storageMemoInput}></textarea>
            </div>
            <div className={storageInputStyle.backMemo}></div>
            <button onClick={handleSave} className={storageInputStyle.saveBtn}>
              저장
            </button>
            <Link to="/fridge">
              <button className={storageInputStyle.backBtn}>취소</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageAdd;
