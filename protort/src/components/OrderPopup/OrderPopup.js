import React, {useState} from "react";
import "./OrderPopup.css";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import telegramIcon from "../../images/telegramm.svg";
import whatsappIcon from "../../images/whatsapp.svg";
import CardButton from "../CardButton/CardButton";

function OrderPopup(props) {
    const [isCheckedTelegram, setIsCheckedTelegram] = useState(true);
    const [isCheckedWhatsApp, setIsCheckedWhatsApp] = useState(false);
    const [isCheckedCall, setIsCheckedCall] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    React.useEffect(() => {
        if (isCheckedTelegram && !isCheckedAll && !isCheckedCall && !isCheckedWhatsApp) {
            props.generateMessage("Telegram");
        }
    }, [handleChangeName])

    React.useEffect(() => {
        switch (true) {
            case isCheckedAll:
                props.generateMessage("Подойдет любой вариант");
                break;
            case isCheckedTelegram === true && isCheckedWhatsApp === true:
                props.generateMessage("Telegram/WhatsApp");
                break;
            case isCheckedTelegram === true && isCheckedCall === true:
                props.generateMessage("Telegram/Обычный звонок");
                break;
            case isCheckedWhatsApp === true && isCheckedCall === true:
                props.generateMessage("WhatsApp/Обычный звонок");
                break;
            case isCheckedTelegram:
                props.generateMessage("Telegram");
                break;
            case isCheckedWhatsApp:
                props.generateMessage("WhatsApp");
                break;
            case isCheckedCall:
                props.generateMessage("Обычный звонок");
                break;
        }

        handleCheckCheckboxes();

    }, [isCheckedTelegram, isCheckedWhatsApp, isCheckedCall, isCheckedAll])

    function handleChangeName(evt) {
        props.setName(evt.target.value);
        props.generateMessage();
    }

    function handleChangePhone(evt) {
        props.setPhone(evt.target.value)
        props.generateMessage();
    }

    function handleChangeCheckboxTelegram() {
        setIsCheckedTelegram(!isCheckedTelegram);
        setIsCheckedAll(false);
    }

    function handleChangeCheckboxWhatsapp() {
        setIsCheckedWhatsApp(!isCheckedWhatsApp);
        setIsCheckedAll(false);
    }

    function handleChangeCheckboxCall() {
        setIsCheckedCall(!isCheckedCall);
        setIsCheckedAll(false);
    }

    function handleChangeCheckboxAll() {
        if (isCheckedAll) {
            setIsCheckedAll(false);
            setIsCheckedTelegram(true);
            setIsCheckedWhatsApp(false);
            setIsCheckedCall(false);
        } else if (!isCheckedAll) {
            setIsCheckedAll(true);
            setIsCheckedTelegram(true);
            setIsCheckedWhatsApp(true);
            setIsCheckedCall(true);
        }
    }

    function handleCheckCheckboxes() {
        if (isCheckedWhatsApp && isCheckedTelegram && isCheckedCall) {
            setIsCheckedAll(true);
        }
    }

    return (
        <div className={`order-popup ${props.class}`}>
            <section className="order-popup__container">
                <button className="order-popup__close-button" onClick={props.onCLose}></button>
                <h2 className="order-popup__title">Оставьте свои данные и наш кондитер свяжется с вами</h2>
                <form className="order-popup__form" onSubmit={props.onSubmit}>
                    <label htmlFor="name" className="order-popup__label">Имя</label>
                    <input type="text" className="order-popup__input" minLength="2" maxLength="30" name="name"
                           placeholder="Марина" pattern="^[A-Za-zа-яА-ЯЁё]+$" onChange={handleChangeName} value={props.name || ""} required/>
                    <label htmlFor="phoneNumber" className="order-popup__label">Номер телефона</label>
                    <input type="tel" className="order-popup__input" name="phoneNumber" value={props.phone || ""}
                           onChange={handleChangePhone} pattern="^\+7[0-9]{3}[0-9]{7}$" placeholder="+7 949 123 45 67"
                           required/>
                    <div className="order-checkbox__container">
                        <h2 className="order-checkbox__title">Выберите удобный тип связи:</h2>
                        <label htmlFor="Telegram" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" id="Telegram" name="accessType"
                                   disabled={isCheckedAll} value="Telegram" onChange={handleChangeCheckboxTelegram} checked={isCheckedTelegram} required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                            Telegram</label>
                        <label htmlFor="WhatsApp" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" id="WhatsApp" name="accessType"
                                   disabled={isCheckedAll} value="WhatsApp" onChange={handleChangeCheckboxWhatsapp} checked={isCheckedWhatsApp} required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                            WhatsApp</label>
                        <label htmlFor="Call" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" id="Call" name="accessType"
                                   disabled={isCheckedAll} value="Call" onChange={handleChangeCheckboxCall} checked={isCheckedCall} required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                            Обычный звонок</label>
                        <label htmlFor="All" className="order-popup__label-checkbox">
                            <input type="checkbox" className="order-popup__checkbox" id="All" name="accessType"
                                   value="All" onChange={handleChangeCheckboxAll} checked={isCheckedAll} required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                            Подойдет любой вариант</label>
                    </div>
                    <CardButton class="order-checkbox__button" text="Отправить заявку"/>
                </form>
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
