import React, {useState} from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";
import CardButton from "../CardButton/CardButton";
import {telegramApi} from "../../utils/TelegramApi";

function Gift(props) {

    const [open, setOpen] = useState(false);
    const [gift, setGift] = useState({});
    const [message, setMessage] = useState("");

    function openInfoPopup() {
        setOpen(true);
        setGift(props.catalogItem);
    }

    function closeInfoPopup() {
        setOpen(false)
    }

    function sendingOrderToTg() {
        generateMessage(props.catalogItem, "+79164659510", "Мария")
        telegramApi.sendOrder(message)
            .then((res) => {
                    // setMessage("")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function generateMessage(gift, phoneNumber, name) {
        setMessage(
            `Марина! Тебе пришел заказ. 
                   Данные по заказу:
                   1. Номер телефона заказчика: ${phoneNumber},
                   2. Имя заказчика: ${name},
                   3. Хотят заказть: ${gift.descriptionShort}`
        )
    }

    return (
        <>
            <li className="gift">
                <img className="gift__image" src={props.catalogItem.image} alt={props.catalogItem.descriptionShort}/>
                <p className="gift__description">{props.catalogItem.descriptionShort}</p>
                <p className="gift__price">{props.catalogItem.price} &#8381;</p>
                <CardButton class="gift__button-more" text="Подробнее" onClick={openInfoPopup}/>
                <CardButton class="gift__button-order" text="Заказать" onClick={sendingOrderToTg}/>
            </li>
            <GiftInfoPopup gift={gift} class={open && "gift-popup_visible"} onClose={closeInfoPopup}/>
        </>
    )
}

export default Gift;
