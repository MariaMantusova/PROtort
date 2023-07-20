import React from "react";
import "./NavigationMobile.css";
import {NavLink} from "react-router-dom";
import {CgMenuCake, CgClose} from "react-icons/cg";
import {useState} from "react";

function NavigationMobile() {

    const [open, setOpen] = useState(false);

    const cakeMenuIcon = <CgMenuCake className="header__cake-menu" onClick={() => setOpen(!open)}/>;
    const cakeMenuCloseIcon = <CgClose className="header__cake-menu header__cake-menu-close" onClick={() => setOpen(!open)}/>;

    return (
        <nav className="header__nav-mobile">
            {open ? cakeMenuCloseIcon : cakeMenuIcon}
            {open &&
                <div className="header__nav-links">
                    <NavLink to="/catalog" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>Каталог</NavLink>
                    <NavLink to="/order" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>Заказ</NavLink>
                    <NavLink to="/about-us" className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>О нас</NavLink>
                </div>
            }
        </nav>
    )
}

export default NavigationMobile;
