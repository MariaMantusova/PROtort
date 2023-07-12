import React from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";

function Gift(props) {
    return (
        <>
            <li className="gift">
                <img className="gift__image" src={props.catalogItem.image} alt={props.catalogItem.descriptionShort}/>
                <p className="gift__description">{props.catalogItem.descriptionShort}</p>
                <p className="gift__price">{props.catalogItem.price} &#8381;</p>
                <button className="gift__button-more">Подробнее</button>
                <button className="gift__button-order">Заказать</button>
            </li>
            {/*<GiftInfoPopup gift={props.catalogItem}/>*/}
        </>
    )
}

export default Gift;
