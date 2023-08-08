import React, {useState} from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";
import CardButton from "../CardButton/CardButton";
import OrderPopup from "../OrderPopup/OrderPopup";
import InfoAboutOrderPopup from "../InfoAboutOrderPopup/InfoAboutOrderPopup";
import iconSuccess from "../../images/icon-success.svg";
import iconFail from "../../images/icon-fail.svg";

function Gift(props) {
    const [gift, setGift] = useState({});
    const [message, setMessage] = useState("");

    function openInfoPopup() {
        props.setOpenInfo(true);
        setGift(props.catalogItem);
    }

    function openOrderPopup() {
        props.setOpenOrder(true);
    }

    function generateMessage(connectionType) {
        setMessage(
            `Марина! Тебе пришел заказ.
                   Данные по заказу:
                   1. Номер телефона заказчика: ${props.phone.value},
                   2. Имя заказчика: ${props.name.value},
                   3. Хотят заказть: ${props.catalogItem.descriptionShort},
                   4. Связаться через: ${connectionType}`
        )
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
            <GiftInfoPopup gift={gift} class={props.openInfo && "gift-popup_visible"} onClick={openOrderPopup}
                           onClose={props.closeInfoPopup}/>
            <OrderPopup gift={gift} class={props.openOrder && "order-popup_visible"} generateMessage={generateMessage}
                        onSubmit={props.sendingOrderInfo} name={props.name} phone={props.phone}
                        onCLose={props.closeOrderPopup} message={message}/>
            <InfoAboutOrderPopup alt="Иконка успешного отправления данных" onClick={props.closeOrderInfoPopup}
                                 class={props.openInfoOrderSuccess && "order-info__popup_visible"} image={iconSuccess}
                                 text="Форма успешно заполнена!
            Наш&nbsp;кондитер свяжется с вами в течение часа!"/>
            <InfoAboutOrderPopup alt="Иконка ошибки при отправлении данных" onClick={props.closeOrderInfoPopup}
                                 class={props.openInfoOrderFail && "order-info__popup_visible"} image={iconFail} text="Что-то пошло не так...
           Заполните,&nbsp;пожалуйста, форму еще раз."/>
        </>
    )
}

export default Gift;
