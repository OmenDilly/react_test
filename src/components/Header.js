import React, { memo, useContext, useState } from 'react'
import { UserDataContext } from './UserDataContext'

const Header = () => {
    
    const {userData} = useContext(UserDataContext)

    const [disabled, setDisabled] = useState(true)

    return (
        <div className='header__contaimner'>
            <div className="header">
                <span className='header__greet'>Здравствуйте, </span>
                <span className='header__name'>{userData.name}</span>
            </div>
            <span 
                onClick={() => setDisabled(prev => !prev)}
                className='change__status'
            >
                Сменить статус
            </span>
            {/* <div className='status__container'> */}
                <input 
                    disabled={disabled}
                    form='user__form'
                    type="text" 
                    defaultValue={userData.status}
                />
            {/* </div> */}
        </div>
    )
}

export default memo(Header)