import React, { memo, useContext } from 'react'
import { UserDataContext } from './UserDataContext'
const cities = require('../cities.json')

const Select = () => {

    const {userData, setUserData} = useContext(UserDataContext)

    const handleChange = (e) => {
        setUserData({...userData, city: e.target.value})
    }

    return (
        <div>
            <label htmlFor="city">Ваш город</label>
            <select onChange={handleChange} name="city" form="user__form">
                <option value={userData.city}>{userData.city}</option>
                {cities && cities.map((city, index) => (
                    <option key={index} value={city.city} className="">{city.city}</option>
                ))}
            </select>
        </div>
    )
}

export default memo(Select)