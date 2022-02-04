import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Header.module.css";

function Header() {
  return (
    <div className={st.nav_wrap}>
      <div className={st.nav}>
        <NavLink
          to="/pre-junior"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          PRE_JUNIOR
        </NavLink>
        <NavLink
          to="/junior"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          JUNIOR
        </NavLink>
        <NavLink
          to="/junior-plus"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          JUNIOR_PLUS
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
