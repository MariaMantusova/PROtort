import React, {useState} from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";
import CardButton from "../CardButton/CardButton";
import {telegramApi} from "../../utils/TelegramApi";
import OrderPopup from "../OrderPopup/OrderPopup";

function Gift(props) {

    const [openInfo, setOpenInfo] = useState(false);
    const [openOrder, setOpenOrder] = useState(false);
    const [gift, setGift] = useState({});
    const [message, setMessage] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    function openInfoPopup() {
        setOpenInfo(true);
        setGift(props.catalogItem);
    }

    function openOrderPopup() {
        setOpenOrder(true);
    }

    function closeInfoPopup() {
        setOpenInfo(false);
    }

    function closeOrderPopup() {
        setOpenOrder(false);
    }

    function sendingOrderToTg() {
        telegramApi.sendOrder(message)
            .then((res) => {
                    // setMessage("")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function generateMessage() {
        setMessage(
            `Марина! Тебе пришел заказ.
                   Данные по заказу:
                   1. Номер телефона заказчика: ${customerPhone},
                   2. Имя заказчика: ${customerName},
                   3. Хотят заказть: ${props.catalogItem.descriptionShort}`
        )
    }

    function sendingOrderInfo(evt) {
        evt.preventDefault();
        sendingOrderToTg();
    }

    return (
        <>
            <li className="gift">
                <img className="gift__image" src={props.catalogItem.image} alt={props.catalogItem.descriptionShort}/>
                <p className="gift__description">{props.catalogItem.descriptionShort}</p>
                <p className="gift__price">{props.catalogItem.price} &#8381;</p>
                <CardButton class="gift__button-more" text="Подробнее" onClick={openInfoPopup}/>
                <CardButton class="gift__button-order" text="Заказать" onClick={openOrderPopup}/>
            </li>
            <GiftInfoPopup gift={gift} class={openInfo && "gift-popup_visible"} onClick={openOrderPopup} onClose={closeInfoPopup}/>
            <OrderPopup class={openOrder && "order-popup_visible"} generateMessage={generateMessage} onSubmit={sendingOrderInfo} name={customerName} phone={customerPhone} setName={setCustomerName} setPhone={setCustomerPhone} onCLose={closeOrderPopup}/>
        </>
    )
}

export default Gift;
