import React from "react";
import "./CardButton.css";

function CardButton(props) {
    return (
        <button className={`gift__button ${props.class}`} onClick={props.onClick}>{props.text}</button>
    )
}

export default CardButton;
