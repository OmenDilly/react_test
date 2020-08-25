import React, { memo, useContext, useState, useEffect } from 'react'
import { UserDataContext } from './UserDataContext'

const TextField = (props) => {

    const {userData, setUserData } = useContext(UserDataContext)

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            setUserData({...userData, agree: !userData.agree})
        } else {
            setUserData({...userData, [e.target.name]: e.target.value})
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
                required={props.type === 'checkbox' ? false : true}
            />
            <span>
                {props.helperText}
            </span>

            </div>
        </div>
    )
}

export default memo(TextField)