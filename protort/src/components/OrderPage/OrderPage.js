import React, {useState} from "react";
import "./OrderPage.css";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import telegramIcon from "../../images/telegramm.svg";
import whatsappIcon from "../../images/whatsapp.svg";
import OrderForm from "../OrderForm/OrderForm";

function OrderPage(props) {
    const [message, setMessage] = useState("");
    const [isCheckedTelegram, setIsCheckedTelegram] = useState(true);
    const [isCheckedWhatsApp, setIsCheckedWhatsApp] = useState(false);
    const [isCheckedCall, setIsCheckedCall] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    function generateMessage(connectionType) {
        setMessage(
            `Марина! Тебе пришел заказ.
                   Данные по заказу:
                   1. Номер телефона заказчика: ${props.phone.value},
                   2. Имя заказчика: ${props.name.value},
                   3. Хотят заказть: нужно помочь с выбором,
                   4. Связаться через: ${connectionType}`
        )
    }

    return(
        <>
            <ScrollingLine/>
            <Header/>
            <section className="order">
                <h1 className="order__title">Оформить заказ</h1>
                <h2 className="order__text">Для оформления заказа - выберите удобный мессенджер</h2>
                <ul className="order__social-networks">
                    <SocialNetwork class="social-network__brown" href="https://t.me/marina_pro_tort" icon={telegramIcon}
                                   alt="телеграм ссылка и лого"/>
                    <SocialNetwork class="social-network__brown" href="#" icon={whatsappIcon}
                                   alt="вотсапп ссылка и лого"/>
                </ul>
                <h3 className="order__text-span">или</h3>
                <h2 className="order__text">Заполните форму и наш кондитер сам свяжется с вами</h2>
                <OrderForm name={props.name} phone={props.phone} openInfo={props.openInfo}
                           setOpenInfo={props.setOpenInfo} openOrder={props.openOrder} setOpenOrder={props.setOpenOrder}
                           closeInfoPopup={props.closeInfoPopup} closeOrderPopup={props.closeOrderPopup}
                           onSubmit={props.sendingOrderInfo}
                           closeOrderInfoPopup={props.closeOrderInfoPopup}
                           openInfoOrderSuccess={props.openInfoOrderSuccess}
                           openInfoOrderFail={props.openInfoOrderFail}
                           isCheckedTelegram={isCheckedTelegram} setIsCheckedTelegram={setIsCheckedTelegram}
                           isCheckedWhatsApp={isCheckedWhatsApp} setIsCheckedWhatsApp={setIsCheckedWhatsApp}
                           isCheckedCall={isCheckedCall} setIsCheckedCall={setIsCheckedCall} generateMessage={generateMessage}
                           isCheckedAll={isCheckedAll} setIsCheckedAll={setIsCheckedAll} message={message}
                           classForm="order-popup__form_type-page" classInput="order-popup__input_type-page"
                />
            </section>
            <Footer/>
        </>
    )
}

export default OrderPage;
