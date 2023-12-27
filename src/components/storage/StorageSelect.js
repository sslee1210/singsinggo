import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StorageStyle from "./Storage.module.css";
import Nav from "../../Nav";

const StorageSelect = () => {
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

  const [memoList, setMemoList] = useState(loadFromLocalStorage());

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(`memoList_${user.username}`, JSON.stringify(memoList));
  }, [memoList]);

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  const path = process.env.PUBLIC_URL;

  return (
    <>
      <div className={StorageStyle.storageWrapper}>
        <div className={StorageStyle.selectListWrapper}>
          <header className={StorageStyle.header}>
            <Link to="/add">
              <button className={StorageStyle.plusBtn}>
                <img src={path + "/images/fridge_add.svg"} />
              </button>
            </Link>
            <h2 className={StorageStyle.myTitle}>나의 싱싱고</h2>
            <Link to="/mypage">
              <button className={StorageStyle.myPageBtn}>
                <img src={path + "/images/myPage.svg"} />
              </button>
            </Link>
          </header>
          {memoList.length > 0 ? (
            <ul className={StorageStyle.memoList}>
              {memoList.map((item, index) => (
                <li key={index}>
                  <div className={StorageStyle.memoItem}>
                    <div className={StorageStyle.fridgeNameWrapper}>
                      <Link to="/food" style={{ textDecoration: "none" }}>
                        <strong className={StorageStyle.fridgeName}>
                          {item.fridgeName}
                        </strong>
                      </Link>
                      <button
                        className={StorageStyle.editBtn}
                        onClick={() => handleEdit(index)}>
                        <img src={path + "/images/fridge_setting.svg"} />
                      </button>
                    </div>
                    <img
                      src={path + "/images/fridge_magnet.svg"}
                      className={StorageStyle.orangeMagnet}
                    />
                    <div className={StorageStyle.memoBg}>
                      <p className={StorageStyle.memoContent}>{item.memo}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={StorageStyle.emptyWrapper}>
              <h2 className={StorageStyle.emptyMemoFirst}>
                등록된 싱싱고가 없어요
              </h2>
              <p className={StorageStyle.emptyMemoSecond}>
                상품등록을 원한다면
              </p>
              <p className={StorageStyle.emptyMemoThird}>
                상단 추가버튼을 클릭 :)
              </p>
            </div>
          )}
        </div>
        {/* <Nav /> */}
      </div>
    </>
  );
};

export default StorageSelect;
