import React from "react";
import "./InfoAboutOrderPopup.css";

function InfoAboutOrderPopup(props) {
    return(
        <section className={`order-info__popup ${props.class}`} >
            <div className="order-info-popup__container">
                <button className="order-info-popup__close-button" onClick={props.onClick}></button>
                <img className="order-info-popup__image" src={props.image} alt={props.alt}/>
                <p className="order-info-popup__text">{props.text}</p>
            </div>
        </section>
    );
}

export default InfoAboutOrderPopup;
