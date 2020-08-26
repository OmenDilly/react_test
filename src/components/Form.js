import React, { useContext, memo } from 'react'
import { UserDataContext } from './UserDataContext'
import TextField from './TextField'
import Button from './Button'
import Select from './Select'
import Header from './Header'

const Form = () => {

    const {errs} = useContext(UserDataContext)

    return (
        <form className='form' id='user__form'>
            <Header/>
            <Select/>
            <hr/>
            <TextField 
                name='password' 
                label='Пароль' 
                helperText='Ваш новый пароль должен содержать не менее 5 символов' 
                type='password'
                error={errs.pass}
            />
            <TextField 
                name='confirmPassword' 
                label='Пароль еще раз' 
                helperText='Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки'
                type='password'
                error={errs.confPass}
            />
            <hr/>
            <TextField 
                name='email' 
                label='Элеткронная почта' 
                helperText='Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки'
                type='email'
                error={errs.email}
            />
            <TextField
                name='agree'
                label='Я согласен'
                helperText='принимать актуальную информацию на емейл'
                type='checkbox'
            />
            <Button/>
        </form>
    )
}

export default memo(Form)