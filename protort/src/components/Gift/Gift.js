import React, {useState} from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";

function Gift(props) {

    const [open, setOpen] = useState(false);
    const [gift, setGift] = useState({});

    function openInfoPopup() {
        setOpen(true);
        setGift(props.catalogItem);
    }

    function closeInfoPopup() {
        setOpen(false)
    }

    return (
        <>
            <li className="gift">
                <img className="gift__image" src={props.catalogItem.image} alt={props.catalogItem.descriptionShort}/>
                <p className="gift__description">{props.catalogItem.descriptionShort}</p>
                <p className="gift__price">{props.catalogItem.price} &#8381;</p>
                <button className="gift__button-more" onClick={openInfoPopup}>Подробнее</button>
                <button className="gift__button-order">Заказать</button>
            </li>
            <GiftInfoPopup gift={gift} class={open && "gift-popup_visible"} onClose={closeInfoPopup}/>
        </>
    )
}

export default Gift;
