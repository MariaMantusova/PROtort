import React, {useEffect} from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = React.useState(true);
    const [minLengthError, setMinLengthError] = React.useState(false);
    const [telephoneError, setTelephoneError] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);
    const [inputValid, setInputValid] = React.useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isTelephone':
                    const regularExpEmail = /^\+7[0-9]{3}[0-9]{7}$/
                    regularExpEmail.test(String(value.toLowerCase())) ? setTelephoneError(false) : setTelephoneError(true)
                    break;
                case 'isName':
                    const regularExpName = /^[a-zа-яёA-ZА-ЯЁ\-\s/i]+$/
                    regularExpName.test(String(value.toLowerCase())) ? setNameError(false) : setNameError(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || telephoneError || nameError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, telephoneError, nameError])

    return {
        isEmpty,
        minLengthError,
        telephoneError,
        nameError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setIsDirty] = React.useState(false);
    const valid = useValidation(value, validations);

    const onChange = (evt) => {
        setValue(evt.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        setValue,
        setIsDirty,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export {useInput}
