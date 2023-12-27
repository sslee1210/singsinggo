import ShoppingStyle from "./Shopping.module.css";
import { useState } from "react";

const ShoppingItem = ({ id, text, onDel, path }) => {
  return (
    <li className={ShoppingStyle.listItem}>
      <img
        src={path + "/images/shoppingList_chk.svg"}
        alt="플러스 아이콘"
        className={ShoppingStyle.listIcon}
      />
      <p>{text}</p>
      <button onClick={() => onDel(id)}>
        <img
          src={path + "/images/shoppinngList_del.svg"}
          alt="삭제 아이콘"
          className={ShoppingStyle.listIcon}
        />
      </button>
    </li>
  );
};

export default ShoppingItem;
