// Login.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [] = useState(false);
  const [] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      navigate("/fridge");
    }
  }, [navigate]);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")); // 로컬 스토리지에서 사용자 정보를 불러옴
    const user = users?.find(
      (user) => user.username === id && user.password === pw
    );

    if (user) {
      alert("로그인 성공!");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/fridge");
    } else {
      alert("로그인 실패. 아이디 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>
          이제부터 냉장고 관리는
          <br /> <span>싱싱고 </span>와 함께<span> :)</span>
        </h2>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.inputWrap}>
          <input
            type="text"
            className={styles.input}
            placeholder="아이디"
            value={id}
            onChange={handleId}
          />
        </div>

        <div className={styles.inputWrap}>
          <input
            type="password"
            className={styles.input}
            placeholder="비밀번호"
            value={pw}
            onChange={handlePassword}
          />
        </div>
      </div>

      <div className={styles.bottomWrapper}>
        <button className={styles.LogInButton} onClick={handleLogin}>
          로그인
        </button>
        <Link to="/signup">
          <button className={styles.bottomButton}>회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
