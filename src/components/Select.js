import React, { memo, useContext } from 'react'
import { UserDataContext } from './UserDataContext'
const cities = (require('../cities.json')).filter(city => city.population > 50000)
const mostPop = Math.max.apply(Math, cities.map((city) => { return city.population; }))
const largCity = cities.filter((city) => city.population === mostPop.toString())

const Select = () => {

    const {userData, setUserData} = useContext(UserDataContext)

    const handleChange = (e) => {
        setUserData({...userData, city: e.target.value})
    }

    return (
        <div className='select__container'>
            <label htmlFor="city">Ваш город</label>
            <div className='select__box'>
                <select 
                    onChange={handleChange} 
                    defaultValue={userData.city} 
                    name="city" 
                    form="user__form"
                >
                    <option style={{fontWeight: 'bold'}} value={largCity[0].city}>{largCity[0].city}</option>
                    {cities && cities.map((city, index) => (
                        <option key={index} value={city.city} className="">{city.city}</option>
                    ))}
                </select>
    
            </div>

        </div>
    )
}

export default memo(Select)