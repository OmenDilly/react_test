import React, {useState, useContext, useEffect, memo} from 'react'
import { UserDataContext } from './UserDataContext'
const clearErrs = {
    pass: '',
    email: '',
    confPass: ''
}

const Button = () => {

    const {userData, errs, setErrs} = useContext(UserDataContext)
    const [date, setDate] = useState(localStorage.getItem('lastDate'))
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (userData.password && userData.confirmPassword && userData.email) {
            // if (userData.password.length < 5) {
            //     setErrs({...errs, pass: 'используйте не менее 5 символов'})
            // } else if (userData.confirmPassword !== userData.password) {
            //     setErrs({...errs, confPass: 'Пароли не совпадают'})
            // } else if (!userData.email.includes('@')) {
            //     setErrs({...errs, email: 'Неверный email'})
            // } else {
            //     setErrs(clearErrs)
            // }
            setDisabled(false)
        } else {
            setDisabled(true)
        }
        
    }, [userData])
    
    const handleClick = (e) => {
        e.preventDefault()
        const date = (new Date()).toLocaleString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: 'long', day: 'numeric'}).replace('г.,', 'в')
        setDate(date)
        localStorage.setItem('lastDate', date)
        localStorage.setItem('city', userData.city)
        console.log(JSON.stringify(userData))
    }

    return (
        <div className='button__container'>
            <div className='wrapper'>
                <input 
                    
                    disabled={disabled}
                    type="submit" 
                    className="sumbit" 
                    value="Изменить"
                    onClick={handleClick}
                />
                <span>
                    { date &&`последние изменения: ${date}`}
                </span>
            </div>

        </div>
    )
}

export default memo(Button)