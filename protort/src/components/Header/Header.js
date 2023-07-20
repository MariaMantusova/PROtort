import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

function Header() {
    return(
        <header className="header">
            <Link to="/">
                <div className="header__logo"></div>
            </Link>
            <Navigation/>
            <NavigationMobile/>
        </header>
    )
}

export default Header;
