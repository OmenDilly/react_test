import React, { memo, useContext, useState } from 'react'
import { UserDataContext } from './UserDataContext'

const Header = () => {
    
    const {userData, setUserData} = useContext(UserDataContext)

    const [disabled, setDisabled] = useState(true)

    return (
        <div className='header__contaimner'>
            <div className="header">
                <span className='header__greet'>Здравствуйте, </span>
                <span className='header__name'>{userData.name}</span>
            </div>
            <div className="edit__box">
                <span 
                    onClick={() => setDisabled(prev => !prev)}
                    className='change__status'
                >
                    Сменить статус
                </span>
                <svg 
                    className='edit__icon' 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="black" 
                    onClick={() => setDisabled(prev => !prev)}
                >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
            </div>
            <input 
                disabled={disabled}
                form='user__form'
                type="text" 
                defaultValue={userData.status}
                onChange={(e) => setUserData({...userData, status: e.target.value})}
            />
        </div>
    )
}

export default memo(Header)