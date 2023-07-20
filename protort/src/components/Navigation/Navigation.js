import React from "react";
import "./Navigation.css";
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className="header__nav">
            <NavLink to="/catalog" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>Каталог</NavLink>
            <NavLink to="/order" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>Заказ</NavLink>
            <NavLink to="/about-us" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>О нас</NavLink>
        </nav>
    )
}

export default Navigation;
