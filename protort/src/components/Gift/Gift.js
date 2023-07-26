import React, {useState} from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";
import CardButton from "../CardButton/CardButton";

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
                <CardButton class="gift__button-more" text="Подробнее" onClick={openInfoPopup}/>
                <CardButton class="gift__button-order" text="Заказать"/>
            </li>
            <GiftInfoPopup gift={gift} class={open && "gift-popup_visible"} onClose={closeInfoPopup}/>
        </>
    )
}

export default Gift;
