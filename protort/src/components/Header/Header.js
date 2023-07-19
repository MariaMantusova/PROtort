import React from "react";
import "./Header.css";
import {Link, NavLink} from "react-router-dom";

function Header() {
    return(
        <header className="header">
            <Link to="/">
                <div className="header__logo"></div>
            </Link>
            <nav className="header__nav">
                <NavLink to="/catalog" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>Каталог</NavLink>
                <NavLink to="/order" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>Заказ</NavLink>
                <NavLink to="/about-us" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>О нас</NavLink>
            </nav>
        </header>
    )
}

export default Header;
