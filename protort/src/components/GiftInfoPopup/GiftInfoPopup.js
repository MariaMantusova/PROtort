import React from "react";
import "./GiftInfoPopup.css";

function GiftInfoPopup(props) {
    return(
        <section className={`gift-popup`}>
            <div className="gift-popup__container">
                <button className="gift-popup__close-button"></button>
                <img className="gift-popup__image" src={props.gift.image} alt={props.gift.descriptionShort}/>
                <div className="gift-popup__info-container">
                    <h2 className="gift-popup__title">{props.gift.descriptionShort}</h2>
                    <p className="gift-popup__text">Описание: {props.gift.descriptionAll}</p>
                    <p className="gift-popup__measure">{props.gift.measureType}{props.gift.weight || props.gift.count}</p>
                    <button className="gift-popup__order-button">Заказать</button>
                </div>
            </div>
        </section>
    )
}

export default GiftInfoPopup;
