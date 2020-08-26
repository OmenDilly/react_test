import React, { memo, useState, useMemo } from 'react'
import { UserDataContext } from './components/UserDataContext'
import Form from './components/Form'
import './styles/index.css'

const App = () => {

    const [userData, setUserData] = useState({
        name: 'Дмитрий',
        status: 'Прежде чем действовать, надо понять',
        password: '',
        confirmPassword: '',
        email: '',
        agree: true, 
        city: localStorage.getItem('city')
    })

    const ContextValue = useMemo(() => ({userData, setUserData}), [userData, setUserData])

    return (
        <UserDataContext.Provider value={ContextValue}>
            <div className='main__container'>
                <Form/>
            </div>
        </UserDataContext.Provider>
    )
}

export default memo(App)