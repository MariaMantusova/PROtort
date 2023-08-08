import React, {useState} from "react";
import "./OrderPopup.css";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import telegramIcon from "../../images/telegramm.svg";
import whatsappIcon from "../../images/whatsapp.svg";
import OrderForm from "../OrderForm/OrderForm";

function OrderPopup(props) {
    return (
        <div className={`order-popup ${props.class}`}>
            <section className="order-popup__container">
                <button className="order-popup__close-button" onClick={props.onCLose}></button>
                <h2 className="order-popup__title">Оставьте свои данные и наш кондитер свяжется с вами</h2>
                <OrderForm generateMessage={props.generateMessage} onSubmit={props.onSubmit}
                           name={props.name} phone={props.phone} gift={props.gift} message={props.message}
                />
                <span className="order-popup__span">или</span>
                <p className="order-popup__text">Перейдите в удобный мессенджер для оформления заказа</p>
                <div className="order-social-network__container">
                    <SocialNetwork class="social-network__brown social-network__popup"
                                   iconClass="social-network__icon-popup" href="https://t.me/marina_pro_tort"
                                   icon={telegramIcon}
                                   alt="телеграм ссылка и лого"/>
                    <SocialNetwork class="social-network__brown social-network__popup"
                                   iconClass="social-network__icon-popup" href="#" icon={whatsappIcon}
                                   alt="вотсапп ссылка и лого"/>
                </div>
            </section>
        </div>
    )
}

export default OrderPopup;
