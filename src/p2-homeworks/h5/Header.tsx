import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.nav_wrap}>
      <div className={style.nav}>
        <NavLink to="/pre-junior">PRE_JUNIOR</NavLink>
        <NavLink to="/junior">JUNIOR</NavLink>
        <NavLink to="/junior-plus">JUNIOR_PLUS</NavLink>
      </div>
    </div>
  );
}

export default Header;
