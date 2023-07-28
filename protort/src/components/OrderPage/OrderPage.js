import React from "react";
import "./OrderPage.css";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import telegramIcon from "../../images/telegramm.svg";
import whatsappIcon from "../../images/whatsapp.svg";

function OrderPage() {
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
                <h2 className="order__text">Оставьте свой номер и наш кондитер сам свяжется с вами</h2>
                <form className="order__form">
                    <label className="order__label">
                        <input className="order__input" type="tel" placeholder="+7 949 409 56 56" required/>
                    </label>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default OrderPage;
