import React, { memo, useContext, useState, useCallback, useEffect } from 'react'
import { UserDataContext } from './UserDataContext'

const clearErrs = {
    pass: '',
    email: '',
    confPass: ''
}

const TextField = (props) => {

    const {userData, setUserData, errs, setErrs } = useContext(UserDataContext)
    const [color, setColor] = useState('')

    useEffect(() => {
        props.error
        ?
        setColor('#FF0000')
        :
        setColor('')
    }, [props.error])

    const secondValidation = useCallback((name, value) => {
        switch (name) {
            case 'password':
                value.length <= 5 
                ?
                setErrs({...errs, pass: 'Используйте не менее 5 символов'})
                :
                setErrs({...errs, pass: ''})
                break
            case 'confirmPassword':
                value !== userData.password 
                ?
                setErrs({...errs, confPass: 'Пароли не совпадают'})
                :
                setErrs({...errs, confPass: ''})
                break
            case 'email':
                !userData.email.includes('@')
                ?
                setErrs({...errs, email: 'Неверный email'})
                :
                setErrs({...errs, email: ''})
                break
            default:
                break
        }
    }, [userData, errs, setErrs])

    const firstValidation = useCallback((name, value) => {
        switch (name) {
            case 'password':
                !value &&
                setErrs({...errs, pass: 'Укажите пароль'})
                break
            case 'confirmPassword':
                !value &&
                setErrs({...errs, confPass: 'Укажите пароль'})
                break
            case 'email':
                !value &&
                setErrs({...errs, email: 'Укажите E-mail'})
                break
            default:
                break
        }
    }, [errs, setErrs])

    const handleChange = useCallback((e) => {

        setUserData({...userData, [e.target.name]: e.target.value})
        secondValidation(e.target.name, e.target.value)
        firstValidation(e.target.name, e.target.value)
        
    }, [firstValidation, secondValidation, setUserData, userData])

    return (
        <div className='input__container'>
            <label 
                htmlFor={props.type}
            >
                {props.label}
            </label>
            <div className='active__area' type={props.type}>
            <input 
                type={props.type}
                minLength={6}
                defaultValue={props.default}
                name={props.name}
                onChange={handleChange}
                style={{borderColor: color}}
                required={true}
            />
            <span className='helper__text'>
                {props.helperText}
            </span>
            <span className='err'>{props.error}</span>
            </div>

        </div>
    )
}

export default memo(TextField)