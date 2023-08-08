import React, {useState} from "react";
import "./Gift.css";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";
import CardButton from "../CardButton/CardButton";
import {telegramApi} from "../../utils/TelegramApi";
import {useInput} from "../../utils/ValidationHook";
import OrderPopup from "../OrderPopup/OrderPopup";
import InfoAboutOrderPopup from "../InfoAboutOrderPopup/InfoAboutOrderPopup";
import iconSuccess from "../../images/icon-success.svg";
import iconFail from "../../images/icon-fail.svg";

function Gift(props) {
    const [openInfo, setOpenInfo] = useState(false);
    const [openOrder, setOpenOrder] = useState(false);
    const [openInfoOrderSuccess, setOpenInfoOrderSuccess] = useState(false);
    const [openInfoOrderFail, setOpenInfoOrderFail] = useState(false);
    const [gift, setGift] = useState({});
    const [message, setMessage] = useState("");
    const name = useInput('', {isEmpty: true, isName: true, minLength: 2});
    const telephone = useInput('', {isEmpty: true, isTelephone: true});

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

    function closeOrderInfoPopup() {
        setOpenInfoOrderSuccess(false);
        setOpenInfoOrderFail(false);
    }

    function sendingOrderToTg() {
        telegramApi.sendOrder(message)
            .then(() => {
                closeInfoPopup();
                closeOrderPopup();
                setOpenInfoOrderSuccess(true);
            })
            .catch((err) => {
                setOpenInfoOrderFail(true);
                console.log(err);
            })
    }

    function generateMessage(connectionType) {
        setMessage(
            `Марина! Тебе пришел заказ.
                   Данные по заказу:
                   1. Номер телефона заказчика: ${telephone.value},
                   2. Имя заказчика: ${name.value},
                   3. Хотят заказть: ${props.catalogItem.descriptionShort},
                   4. Связаться через: ${connectionType}`
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
            <GiftInfoPopup gift={gift} class={openInfo && "gift-popup_visible"} onClick={openOrderPopup}
                           onClose={closeInfoPopup}/>
            <OrderPopup class={openOrder && "order-popup_visible"} generateMessage={generateMessage}
                        onSubmit={sendingOrderInfo} name={name.value} phone={telephone.value}
                        onNameChange={name.onChange}
                        onPhoneChange={telephone.onChange} nameDirty={name.isDirty} nameError={name.nameError}
                        nameMinLengthError={name.minLengthError} phoneDirty={telephone.isDirty}
                        phoneError={telephone.telephoneError} onNameBlur={name.onBlur} nameIsEmpty={name.isEmpty}
                        onPhoneBlur={telephone.onBlur} phoneIsEmpty={telephone.isEmpty} onCLose={closeOrderPopup}/>
            <InfoAboutOrderPopup alt="Иконка успешного отправления данных" onClick={closeOrderInfoPopup}
                                class={openInfoOrderSuccess && "order-info__popup_visible"} image={iconSuccess} text="Форма успешно заполнена!
            Наш&nbsp;кондитер свяжется с вами в течение часа!"/>
            <InfoAboutOrderPopup alt="Иконка ошибки при отправлении данных" onClick={closeOrderInfoPopup}
                                 class={openInfoOrderFail && "order-info__popup_visible"} image={iconFail} text="Что-то пошло не так...
           Заполните,&nbsp;пожалуйста, форму еще раз."/>
        </>
    )
}

export default Gift;
