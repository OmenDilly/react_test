import React, { memo, useContext } from 'react'
import { UserDataContext } from './UserDataContext'

const Header = () => {
    
    const {userData} = useContext(UserDataContext)

    return (
        <div className='header__contaimner'>
            <div className="header">
                <span className='header__greet'>Здравствуйте, </span>
                <span className='heder__name'>{userData.name}</span>
            </div>
            <span className='change__status'>
                Сменить статус
            </span>
            <div className='status__container'>
                <input type="text" value={userData.status}/>
            </div>
        </div>
    )
}

export default memo(Header)