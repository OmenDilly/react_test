import React, {useCallback, useContext, memo} from 'react'
import { UserDataContext } from './UserDataContext'

const Checkbox = (props) => {

    const {userData, setUserData} = useContext(UserDataContext)

    const handleChange = useCallback(() => {
        setUserData(prev => {
            return  {...prev, agree: !prev.agree}
        })
    }, [setUserData])

    return (
        <div className='checkbox__container'>
            <label 
                htmlFor={props.type}
            >
                {props.label}
            </label>
            <div className='active__area' type={props.type}>
            <input 
                type={props.type}
                name={props.name}
                onChange={handleChange}
                required={false}
            />
            <span>
                {props.helperText}
            </span>
            </div>

        </div>
    )
}

export default memo(Checkbox)