import React from "react";
import "./SocialNetwork.css";

function SocialNetwork(props) {
    return (
        <li className="social-networks__item">
            <a className={`social-network ${props.class}`} href={props.href} target="_blank" rel="noreferrer"
            >
                <img className="social-network__icon" src={props.icon} alt={props.alt}/>
            </a>
            {props.children}
        </li>
    )
}

export default SocialNetwork;
