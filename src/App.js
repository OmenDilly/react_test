import React, { memo, useState, useMemo } from 'react'
import { UserDataContext } from './components/UserDataContext'
import Form from './components/Form'
import './styles/index.css'

const localUserData = JSON.parse(localStorage.getItem('userData'))

const App = () => {

    const [userData, setUserData] = useState({
        name: localUserData.name || 'Дмитрий',
        status: localUserData.status || 'Прежде чем действовать, надо понять',
        password: '',
        confirmPassword: '',
        email: localUserData.email || '',
        agree: false, 
        city: localUserData.city,
        editDate: localUserData.editDate
    })

    const [errs, setErrs] = useState({
        pass: '',
        email: '',
        confPass: ''
    })

    const ContextValue = useMemo(() => ({userData, setUserData, errs, setErrs}), [userData, setUserData, errs])

    return (
        <UserDataContext.Provider value={ContextValue}>
            <div className='main__container'>
                <Form/>
            </div>
        </UserDataContext.Provider>
    )
}

export default memo(App)