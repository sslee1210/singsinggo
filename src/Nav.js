import { Link, useLocation } from "react-router-dom";
import NavStyle from "./Nav.module.css";

const Nav = () => {
  const path = process.env.PUBLIC_URL;
  const location = useLocation();

  const isMenuSelected = (menuPath) => {
    return location.pathname === menuPath;
  };

  return (
    <nav>
      <ul
        style={{ display: "flex", listStyle: "none" }}
        className={NavStyle.menu}>
        <li>
          <Link to="/fridge" end="/fridge" className={`${NavStyle.navItem}`}>
            <span
              className={`material-symbols-rounded navIcon ${NavStyle.icon} ${
                isMenuSelected("/fridge") && NavStyle.selected
              }`}
              style={{ marginBottom: 1 }}>
              kitchen
            </span>
            <div
              className={`${NavStyle.navName} ${
                isMenuSelected("/fridge") && NavStyle.selected
              }`}>
              냉장고
            </div>
          </Link>
        </li>
        <li>
          <Link to="/food" end="/food" className={`${NavStyle.navItem}`}>
            <span
              className={`material-symbols-rounded navIcon ${NavStyle.icon} ${
                isMenuSelected("/food") && NavStyle.selected
              }`}>
              category
            </span>
            <div
              className={`${NavStyle.navName} ${
                isMenuSelected("/food") && NavStyle.selected
              }`}>
              싱싱고 안
            </div>
          </Link>
        </li>
        <li>
          <Link to="/foodadd" end="/foodadd" className={`${NavStyle.navItem}`}>
            <img
              src={path + "/images/nav_add.svg"}
              alt="푸드리스트"
              className={NavStyle.addBtn}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/shopping"
            end="/shopping"
            className={`${NavStyle.navItem}`}>
            <span
              className={`material-symbols-rounded navIcon ${NavStyle.icon} ${
                isMenuSelected("/shopping") && NavStyle.selected
              }`}>
              local_mall
            </span>
            <div
              className={`${NavStyle.navName} ${
                isMenuSelected("/shopping") && NavStyle.selected
              }`}>
              장바구니
            </div>
          </Link>
        </li>
        <li>
          <Link to="/date" end="/date" className={`${NavStyle.navItem}`}>
            <span
              className={`material-symbols-rounded navIcon ${NavStyle.icon} ${
                isMenuSelected("/date") && NavStyle.selected
              }`}>
              calendar_month
            </span>
            <div
              className={`${NavStyle.navName} ${
                isMenuSelected("/date") && NavStyle.selected
              }`}>
              달력
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
