import React, { useState, useEffect } from "react";
import Login from "./Login";
import SplashStyle from "./Splash.module.css";

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const path = process.env.PUBLIC_URL;

  return (
    <div className={SplashStyle.splashWrapper}>
      {showSplash ? (
        <div className={SplashStyle.titleWrap}>
          <h1 className={SplashStyle.mainTitle}>
            {/* <span>내 손안에 싱싱한 냉장고</span> */}
            <div className={SplashStyle.sudTitle}>싱싱하게 관리하자</div>
            싱싱고
          </h1>
          <img
            src={path + "/images/intro_magnet2.svg"}
            className={SplashStyle.splashMagnet}
          />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Splash;
