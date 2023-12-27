import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MypageStyle from "./Mypage.module.css";

const Mypage = () => {
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [] = useState(false);

  useEffect(() => {
    const savedUserString = localStorage.getItem("user"); // 변경된 부분: "user" 키로 전체 사용자 정보 가져오기
    if (savedUserString) {
      const savedUser = JSON.parse(savedUserString); // 변경된 부분: JSON 파싱
      const savedUsername = savedUser.username; // 변경된 부분: 사용자 이름 가져오기
      setUsername(savedUsername);
    }
  }, [setUsername]);

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("user"); // 로그인 정보를 삭제
      navigate("/"); // 로그인 페이지로 리디렉션
    }
  };

  return (
    <div className={MypageStyle.myPageWrap}>
      <div className={MypageStyle.headerBg}>
        <Link to="/fridge" className={MypageStyle.backBtn}>
          <img src={path + "/images/food_back_blue.svg"} />
        </Link>
        <h2>마이페이지</h2>
        <div className={MypageStyle.profileWrap}>
          <img src={path + "/images/myPage_profile.svg"} />
          <h3>
            {username}님,
            <br /> 안녕하세요 :)
          </h3>
        </div>
      </div>
      <div className={MypageStyle.linkWrap}>
        <Link to="/shopping" className={MypageStyle.shoppingLink}>
          <img src={path + "/images/myPage_shopping.svg"} />
          <p>나의 장바구니로 이동하기</p>
        </Link>
        <Link to="/date" className={MypageStyle.calendaLink}>
          <img src={path + "/images/myPage_calenda.svg"} />
          <p>나의 달력으로 이동하기</p>
        </Link>
        <div className="logoutWrapper">
          <button className={MypageStyle.logOutBtn} onClick={handleLogout}>
            <img src={path + "/images//myPage_logout.svg"} />
            <p>로그아웃</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
