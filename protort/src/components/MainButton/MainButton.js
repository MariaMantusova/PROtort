import React from "react";
import "./MainButton.css";
import {Link} from "react-router-dom";

function MainButton(props) {
    return (
        <Link to="/catalog" className={`image-block__button ${props.class}`}>
            <p  className="image-block__button-text">выбрать подарок</p>
        </Link>
    );
}

export default MainButton;
