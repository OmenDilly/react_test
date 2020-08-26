import React, { memo, useContext, useState, useCallback } from 'react'
import { UserDataContext } from './UserDataContext'

const clearErrs = {
    pass: '',
    email: '',
    confPass: ''
}

const TextField = (props) => {

    const {userData, setUserData, errs, setErrs } = useContext(UserDataContext)
    const [color, setColor] = useState('')

    const firstValidate = useCallback((name, value) => {
        switch (name) {
            case 'password':
                value.length < 5 
                ?
                setErrs({...errs, pass: 'Используйте не менее 5 символов'})
                :
                setErrs({...errs, pass: ''})
                !value
                ?
                setErrs({...errs, pass: 'Укажите пароль'})
                :
                setErrs({...errs, pass: ''})
                break
            case 'confirmPassword':
                userData.confirmPassword !== userData.password
                ?
                setErrs({...errs, confPass: 'Пароли не совпадают'})
                :
                setErrs({...errs, confPass: ''})
                !value
                ?
                setErrs({...errs, confPass: 'Укажите пароль'})
                :
                setErrs({...errs, confPass: ''})
                break
            case 'email':
                !userData.email.includes('@')
                ?
                setErrs({...errs, email: 'Неверный email'})
                :
                setErrs({...errs, email: ''})
                value
                ?
                setErrs({...errs, email: 'Укажите E-mail'})
                :
                setErrs({...errs, email: ''})
                break
            default:
                break
        }
    }, [userData])

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.type === 'checkbox') {
            setUserData({...userData, agree: !userData.agree})
        } else {
            setUserData({...userData, [e.target.name]: e.target.value})
            // errs.pass && errs.confPass && errs.email
            // ?
            // setColor('#FF0000')
            // :
            // setColor('')
            firstValidate(e.target.name, e.target.value)

        }
        
    }

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
                name={props.name}
                onChange={handleChange}
                style={{borderColor: color}}
                required={props.type === 'checkbox' ? false : true}
            />
            <span>
                {props.helperText}
            </span>
            <span className='err'>{props.error}</span>
            </div>

        </div>
    )
}

export default memo(TextField)