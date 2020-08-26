import React, {useState, useContext, useEffect, memo} from 'react'
import { UserDataContext } from './UserDataContext'
const clearErrs = {
    pass: '',
    email: '',
    confPass: ''
}

const Button = () => {

    const {userData, errs, setErrs, setUserData} = useContext(UserDataContext)
    const [date, setDate] = useState(localStorage.getItem('lastDate'))
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (userData.password && userData.confirmPassword && userData.email && !errs.pass && !errs.confPass && !errs.email) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
        
    }, [userData, errs])
    
    const handleClick = (e) => {
        // e.preventDefault()
        const date = (new Date()).toLocaleString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: 'long', day: 'numeric'}).replace('г.,', 'в')
        setUserData({...userData, editDate: date})
        localStorage.setItem('userData', JSON.stringify({
            name: userData.name, 
            status: userData.status, 
            email: userData.email, 
            city: userData.city, 
            editDate: date
        }))
        console.log(JSON.stringify(userData))
    }

    return (
        <div className='button__container'>
            <div className='wrapper'>
                <input 
                    
                    disabled={disabled}
                    type="reset" 
                    className="sumbit" 
                    value="Изменить"
                    onClick={handleClick}
                />
                <span>
                    { userData.editDate &&`последние изменения: ${userData.editDate}`}
                </span>
            </div>

        </div>
    )
}

export default memo(Button)