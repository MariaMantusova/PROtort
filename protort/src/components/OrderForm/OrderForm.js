import React, {useState} from "react";
import "./OrderForm.css";
import CardButton from "../CardButton/CardButton";

function OrderForm(props) {
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
        props.name.onChange(evt);
        props.generateMessage();
    }

    function handleChangePhone(evt) {
        props.phone.onChange(evt);
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

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(props.message);
    }

    return (
        <form className="order-popup__form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="order-popup__label">Имя</label>
            <input type="text" onBlur={props.name.onBlur} className="order-popup__input" minLength="2"
                   maxLength="30" name="name"
                   placeholder="Марина" pattern="^[A-Za-zа-яА-ЯЁё]+$" onChange={handleChangeName}
                   value={props.name.value || ""} required/>
            {(props.name.isDirty && props.name.isEmpty) &&
            <span className="order-popup__input-error">Поле не может быть пустым.</span>}
            {(props.name.isDirty && props.name.nameError && !props.name.isEmpty) &&
            <span className="order-popup__input-error">Данное имя нельзя использовать.</span>}
            <label htmlFor="phoneNumber" className="order-popup__label">Номер телефона</label>
            <input type="tel" onBlur={props.phone.onBlur} className="order-popup__input" name="phoneNumber"
                   value={props.phone.value || ""}
                   onChange={handleChangePhone} pattern="^\+7[0-9]{3}[0-9]{7}$" placeholder="+7 949 123 45 67"
                   required/>
            {(props.phone.isDirty && props.phone.isEmpty) &&
            <span className="order-popup__input-error">Поле не может быть пустым.</span>}
            {(props.phone.isDirty && props.phone.telephoneError && !props.phone.isEmpty) &&
            <span className="order-popup__input-error">Введен некорректный номер телефона.</span>}
            <div className="order-checkbox__container">
                <h2 className="order-checkbox__title">Выберите удобный тип связи:</h2>
                {(!isCheckedTelegram && !isCheckedAll && !isCheckedCall && !isCheckedWhatsApp) &&
                <span className="order-popup__checkbox-error">Выберите минимум 1 тип связи.</span>}
                <label htmlFor="Telegram" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="Telegram" name="accessType"
                           disabled={isCheckedAll} value="Telegram" onChange={handleChangeCheckboxTelegram}
                           checked={isCheckedTelegram}
                           required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                    Telegram</label>
                <label htmlFor="WhatsApp" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="WhatsApp" name="accessType"
                           disabled={isCheckedAll} value="WhatsApp" onChange={handleChangeCheckboxWhatsapp}
                           checked={isCheckedWhatsApp}
                           required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                    WhatsApp</label>
                <label htmlFor="Call" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="Call" name="accessType"
                           disabled={isCheckedAll} value="Call" onChange={handleChangeCheckboxCall}
                           checked={isCheckedCall}
                           required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                    Обычный звонок</label>
                <label htmlFor="All" className="order-popup__label-checkbox">
                    <input type="checkbox" className="order-popup__checkbox" id="All" name="accessType"
                           value="All" onChange={handleChangeCheckboxAll} checked={isCheckedAll}
                           required={!(isCheckedTelegram || isCheckedAll || isCheckedCall || isCheckedWhatsApp)}/>
                    Подойдет любой вариант</label>
            </div>
            <CardButton class="order-checkbox__button" text="Отправить заявку"/>
        </form>
    )
}

export default OrderForm;
