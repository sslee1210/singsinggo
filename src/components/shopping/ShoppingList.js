import React, { useState, useEffect } from "react";
import ShoppingItem from "./ShoppingItem";
import ShoppingStyle from "./Shopping.module.css";

const ShoppingList = ({ onDel, shoppingData, path }) => {
  const [data, setData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  // 데이터 가져오기
  const fetchData = () => {
    const storedData = JSON.parse(localStorage.getItem("shoppingList")) || [];
    setData(storedData);
    setIsEmpty(storedData.length === 0);
  };

  // 페이지 로드 시 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [shoppingData]);

  // 삭제 시 데이터 갱신
  const handleDelete = (id) => {
    const storedData = JSON.parse(localStorage.getItem("shoppingList")) || [];
    const updatedData = storedData.filter((item) => item.id !== id);

    setData(updatedData);

    onDel(id);

    localStorage.setItem("shoppingList", JSON.stringify(updatedData));
  };

  return (
    <>
      {isEmpty ? (
        <p className={ShoppingStyle.noneList}>장바구니에 아무것도 없어요</p>
      ) : (
        <ul className={ShoppingStyle.listWrap}>
          {data.map((list) => (
            <ShoppingItem
              key={list.id}
              id={list.id}
              text={list.text}
              onDel={() => handleDelete(list.id)}
              path={path}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ShoppingList;
