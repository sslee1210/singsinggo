import React from "react";
import ShoppingStyle from "./Shopping.module.css";

const LinkBanner = ({ path }) => {
  return (
    <div className={ShoppingStyle.linkContainer}>
      <div className={ShoppingStyle.linkText}>
        <p className={ShoppingStyle.exShopping}>
          오늘따라 장보러 나가기가
          <br /> 귀찮으신가요?
        </p>
        <p className={ShoppingStyle.exOnline}>온라인으로 장보세요 : &#41;</p>
      </div>
      <div className={ShoppingStyle.linkWrap}>
        <a
          href="https://www.coupang.com/"
          target="_blank"
          className={ShoppingStyle.linkBanner}>
          <img
            src={path + "/images/logo_coupang.svg"}
            alt="플러스아이콘"
            className={ShoppingStyle.bannerIcon}
          />
        </a>
        <a
          href="https://www.kurly.com/"
          target="_blank"
          className={ShoppingStyle.linkBanner}>
          <img
            src={path + "/images/logo_kurly.svg"}
            alt="플러스아이콘"
            className={ShoppingStyle.bannerIcon}
          />
        </a>
        <a
          href="https://www.ssg.com/"
          target="_blank"
          className={ShoppingStyle.linkBanner}>
          <img
            src={path + "/images/logo_ssg.svg"}
            alt="플러스아이콘"
            className={ShoppingStyle.bannerIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default LinkBanner;
