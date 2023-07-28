import React from "react";
import "./OrderPopup.css";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import telegramIcon from "../../images/telegramm.svg";
import whatsappIcon from "../../images/whatsapp.svg";
import CardButton from "../CardButton/CardButton";

function OrderPopup(props) {

    function handleChangeName(evt) {
        props.setName(evt.target.value);
        props.generateMessage();
    }

    function handleChangePhone(evt) {
        props.setPhone(evt.target.value)
        props.generateMessage();
    }

    return (
        <div className={`order-popup ${props.class}`}>
            <section className="order-popup__container">
                <button className="order-popup__close-button" onClick={props.onCLose}></button>
                <h2 className="order-popup__title">Оставьте свои данные и наш кондитер свяжется с вами</h2>
                <form className="order-popup__form" onSubmit={props.onSubmit}>
                    <label htmlFor="name" className="order-popup__label">Имя</label>
                    <input type="text" className="order-popup__input" minLength="2" maxLength="30" name="name"
                           placeholder="Марина" onChange={handleChangeName} value={props.name || ""} required/>
                    <label htmlFor="phoneNumber" className="order-popup__label">Номер телефона</label>
                    <input type="tel" className="order-popup__input" name="phoneNumber" value={props.phone || ""} onChange={handleChangePhone} placeholder="+7 949 123 45 67"
                           required/>
                    <div className="order-checkbox__container">
                        <h2 className="order-checkbox__title">Выберите удобный тип связи:</h2>
                        <label htmlFor="Telegram" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" name="Telegram" defaultChecked/>
                            Telegram</label>
                        <label htmlFor="WhatsApp" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" name="WhatsApp"/>
                            WhatsApp</label>
                        <label htmlFor="Call" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" name="Call"/>
                            Обычный звонок</label>
                        <label htmlFor="All" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" name="All"/>
                            Подойдет любой вариант</label>
                    </div>
                    <CardButton class="order-checkbox__button" text="Отправить заявку"/>
                </form>
                <span className="order-popup__span">или</span>
                <p className="order-popup__text">Перейдите в удобный мессенджер для оформления заказа</p>
                <div className="order-social-network__container">
                    <SocialNetwork class="social-network__brown social-network__popup" iconClass="social-network__icon-popup" href="https://t.me/marina_pro_tort" icon={telegramIcon}
                                   alt="телеграм ссылка и лого"/>
                    <SocialNetwork class="social-network__brown social-network__popup" iconClass="social-network__icon-popup" href="#" icon={whatsappIcon}
                                   alt="вотсапп ссылка и лого"/>
                </div>
            </section>
        </div>
    )
}

export default OrderPopup;
