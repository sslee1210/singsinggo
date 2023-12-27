import { useState, useEffect } from "react";
import ShoppingInput from "./ShoppingInput";
import ShoppingList from "./ShoppingList";
import LinkBanner from "./LinkBanner";
import ShoppingStyle from "./Shopping.module.css";
import { v4 as uuid } from "uuid";

const Shopping = () => {
  const [shoppingData, setShoppingData] = useState([]);

  const path = process.env.PUBLIC_URL;

  // 추가
  const onAdd = (text) => {
    const newItem = {
      id: uuid(),
      text,
    };
    // 현재 상태를 업데이트하고 이를 기반으로 새로운 리스트 생성
    setShoppingData((prevShoppingData) => {
      const updatedShoppingList = [...prevShoppingData, newItem];
      // localStorage에 데이터 저장
      localStorage.setItem("shoppingList", JSON.stringify(updatedShoppingList));
      // 업데이트된 리스트 반환
      return updatedShoppingList;
    });
  };

  // 삭제
  const onDel = (id) => {
    setShoppingData(shoppingData.filter((list) => list.id !== id));
  };

  // 모두 삭제
  const onReset = () => {
    const isConfirmed = window.confirm("정말로 모두 삭제하실 건가요?");
    if (isConfirmed) {
      // 상태 초기화
      setShoppingData([]);
      // localStorage에서 데이터 삭제
      localStorage.removeItem("shoppingList");
    }
  };

  useEffect(() => {
    const storedShoppingList =
      JSON.parse(localStorage.getItem("shoppingList")) || [];
    setShoppingData(storedShoppingList);
  }, []);

  return (
    <>
      <div className={ShoppingStyle.shopBg}>
        <div className={ShoppingStyle.bgWrap}>
          <img
            src={path + "/images/magnet3.svg"}
            alt="마그넷 세개"
            className={ShoppingStyle.magnetImg}
          />
          <div className={ShoppingStyle.shopWrap}>
            <h2 className={ShoppingStyle.shopTitle}>장보러 싱싱고</h2>
            <ShoppingInput onAdd={onAdd} onReset={onReset} path={path} />
            <div className={ShoppingStyle.scrollWrap}>
              <ShoppingList
                shoppingData={shoppingData}
                onDel={onDel}
                path={path}
              />
            </div>
            <LinkBanner path={path} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
