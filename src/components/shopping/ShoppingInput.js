import React, { useState, useEffect } from "react";
import ShoppingStyle from "./Shopping.module.css";
import { v4 as uuid } from "uuid";

const ShoppingInput = ({ onAdd, onReset, path }) => {
  const [text, setText] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const storedShoppingList =
      JSON.parse(localStorage.getItem("shoppingList")) || [];
    console.log("Stored Shopping List:", storedShoppingList);
    setShoppingList(storedShoppingList);
  }, []);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("내용을 입력해 주세요!");
      return;
    }
    const newItem = {
      id: uuid(),
      text,
    };

    setShoppingList((prevShoppingList) => [...prevShoppingList, newItem]);

    const storedShoppingList =
      JSON.parse(localStorage.getItem("shoppingList")) || [];
    const updatedShoppingList = [...storedShoppingList, newItem];

    localStorage.setItem("shoppingList", JSON.stringify(updatedShoppingList));

    // 상태 초기화
    setText("");
    // 상태 업데이트
    setShoppingList(updatedShoppingList);

    onAdd(text);
  };

  const handleReset = () => {
    // 상태 초기화
    setText("");
    // 로컬스토리지에서 데이터 삭제
    localStorage.removeItem("shoppingList");
    // 상태 업데이트
    setShoppingList([]);
    onReset();
  };

  return (
    <>
      <form onSubmit={onSubmit} className={ShoppingStyle.shoppingListInput}>
        <input
          type="text"
          value={text}
          onChange={changeInput}
          placeholder="구매할 목록을 작성하세요"
          className={ShoppingStyle.listAdd}
        />
        <button type="submit" className={ShoppingStyle.addBtn}>
          <img src={path + "/images/shoppingList_add.svg"} alt="플러스아이콘" />
        </button>
      </form>
      <button onClick={handleReset} className={ShoppingStyle.allDelBtn}>
        모두 삭제
      </button>
    </>
  );
};

export default ShoppingInput;
