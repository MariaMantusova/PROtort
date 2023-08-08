import React from "react";
import "./OrderForm.css";
import CardButton from "../CardButton/CardButton";

function OrderForm(props) {
    React.useEffect(() => {
        if (props.isCheckedTelegram && !props.isCheckedAll && !props.isCheckedCall && !props.isCheckedWhatsApp) {
            props.generateMessage("Telegram");
        }
    }, [handleChangeName])

    React.useEffect(() => {
        switch (true) {
            case props.isCheckedAll:
                props.generateMessage("Подойдет любой вариант");
                break;
            case props.isCheckedTelegram === true && props.isCheckedWhatsApp === true:
                props.generateMessage("Telegram/WhatsApp");
                break;
            case props.isCheckedTelegram === true && props.isCheckedCall === true:
                props.generateMessage("Telegram/Обычный звонок");
                break;
            case props.isCheckedWhatsApp === true && props.isCheckedCall === true:
                props.generateMessage("WhatsApp/Обычный звонок");
                break;
            case props.isCheckedTelegram:
                props.generateMessage("Telegram");
                break;
            case props.isCheckedWhatsApp:
                props.generateMessage("WhatsApp");
                break;
            case props.isCheckedCall:
                props.generateMessage("Обычный звонок");
                break;
        }

        handleCheckCheckboxes();

    }, [props.isCheckedTelegram, props.isCheckedWhatsApp, props.isCheckedCall, props.isCheckedAll, handleChangeName, handleChangePhone])

    function handleChangeName(evt) {
        props.name.onChange(evt);
        props.generateMessage();
    }

    function handleChangePhone(evt) {
        props.phone.onChange(evt);
        props.generateMessage();
    }

    function handleChangeCheckboxTelegram() {
        props.setIsCheckedTelegram(!props.isCheckedTelegram);
        props.setIsCheckedAll(false);
    }

    function handleChangeCheckboxWhatsapp() {
        props.setIsCheckedWhatsApp(!props.isCheckedWhatsApp);
        props.setIsCheckedAll(false);
    }

    function handleChangeCheckboxCall() {
        props.setIsCheckedCall(!props.isCheckedCall);
        props.setIsCheckedAll(false);
    }

    function handleChangeCheckboxAll() {
        if (props.isCheckedAll) {
            props.setIsCheckedAll(false);
            props.setIsCheckedTelegram(true);
            props.setIsCheckedWhatsApp(false);
            props.setIsCheckedCall(false);
        } else if (!props.isCheckedAll) {
            props.setIsCheckedAll(true);
            props.setIsCheckedTelegram(true);
            props.setIsCheckedWhatsApp(true);
            props.setIsCheckedCall(true);
        }
    }

    function handleCheckCheckboxes() {
        if (props.isCheckedWhatsApp && props.isCheckedTelegram && props.isCheckedCall) {
            props.setIsCheckedAll(true);
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(props.message);
        props.setIsCheckedTelegram(true);
        props.setIsCheckedWhatsApp(false);
        props.setIsCheckedCall(false);
        props.setIsCheckedAll(false);
    }

    return (
        <form className={`order-popup__form ${props.classForm}`} onSubmit={handleSubmit}>
            <label htmlFor="name" className="order-popup__label">Имя</label>
            <input type="text" onBlur={props.name.onBlur} className={`order-popup__input ${props.classInput}`} minLength="2"
                   maxLength="30" name="name"
                   placeholder="Марина" pattern="^[A-Za-zа-яА-ЯЁё]+$" onChange={handleChangeName}
                   value={props.name.value || ""} required/>
            {(props.name.isDirty && props.name.isEmpty) &&
            <span className="order-popup__input-error">Поле не может быть пустым.</span>}
            {(props.name.isDirty && props.name.nameError && !props.name.isEmpty) &&
            <span className="order-popup__input-error">Данное имя нельзя использовать.</span>}
            {(props.name.isDirty && props.name.minLengthError && !props.name.nameError && !props.name.isEmpty) &&
            <span className="order-popup__input-error">Данное имя слишком короткое.</span>}
            <label htmlFor="phoneNumber" className="order-popup__label">Номер телефона</label>
            <input type="tel" onBlur={props.phone.onBlur} className={`order-popup__input ${props.classInput}`}  name="phoneNumber"
                   value={props.phone.value || ""}
                   onChange={handleChangePhone} pattern="^\+7[0-9]{3}[0-9]{7}$" placeholder="+7 949 123 45 67"
                   required/>
            {(props.phone.isDirty && props.phone.isEmpty) &&
            <span className="order-popup__input-error">Поле не может быть пустым.</span>}
            {(props.phone.isDirty && props.phone.telephoneError && !props.phone.isEmpty) &&
            <span className="order-popup__input-error">Введен некорректный номер телефона.</span>}
            <div className="order-checkbox__container">
                <h2 className="order-checkbox__title">Выберите удобный тип связи:</h2>
                {(!props.isCheckedTelegram && !props.isCheckedAll && !props.isCheckedCall && !props.isCheckedWhatsApp) &&
                <span className="order-popup__checkbox-error">Выберите минимум 1 тип связи.</span>}
                <label htmlFor="Telegram" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="Telegram" name="accessType"
                           disabled={props.isCheckedAll} value="Telegram" onChange={handleChangeCheckboxTelegram}
                           checked={props.isCheckedTelegram}
                           required={!(props.isCheckedTelegram || props.isCheckedAll || props.isCheckedCall || props.isCheckedWhatsApp)}/>
                    Telegram</label>
                <label htmlFor="WhatsApp" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="WhatsApp" name="accessType"
                           disabled={props.isCheckedAll} value="WhatsApp" onChange={handleChangeCheckboxWhatsapp}
                           checked={props.isCheckedWhatsApp}
                           required={!(props.isCheckedTelegram || props.isCheckedAll || props.isCheckedCall || props.isCheckedWhatsApp)}/>
                    WhatsApp</label>
                <label htmlFor="Call" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="Call" name="accessType"
                           disabled={props.isCheckedAll} value="Call" onChange={handleChangeCheckboxCall}
                           checked={props.isCheckedCall}
                           required={!(props.isCheckedTelegram || props.isCheckedAll || props.isCheckedCall || props.isCheckedWhatsApp)}/>
                    Обычный звонок</label>
                <label htmlFor="All" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="All" name="accessType"
                           value="All" onChange={handleChangeCheckboxAll} checked={props.isCheckedAll}
                           required={!(props.isCheckedTelegram || props.isCheckedAll || props.isCheckedCall || props.isCheckedWhatsApp)}/>
                    Подойдет любой вариант</label>
            </div>
            <CardButton class="order-checkbox__button" text="Отправить заявку"/>
        </form>
    )
}

export default OrderForm;
