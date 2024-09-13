import React, {useRef, useEffect, useState} from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function EnterPassword() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef();

    const handleViewPassword = () => {
        setShowPassword(!showPassword);
    }

    const handlePassword = (e) => {
        e.target.setCustomValidity('');
        setPassword(e.target.value);
        setError('');
    }   

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const lessThanEightChars = e.target.validity.patternMismatch; 

        if(isEmpty)
            setError('Can\'t be empty');
        else if(lessThanEightChars)
            setError('invalid')

    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');        
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('Can\'t be empty');
        else
            setError('invalid');
    }

    useEffect(() => {
        const input = inputRef.current;

        if(showPassword)
            input.type = 'text';
        else
            input.type = 'password';
    }, [showPassword])

    return( 
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Create Password
            </label>
            <div className={styles.input_container}>
                <input 
                    type='password' 
                    name='password'
                    ref={inputRef}
                    className={styles.input} 
                    value={password} 
                    onChange={handlePassword}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    pattern={'[a-zA-Z0-9!@#$%^&*?]{8,}'}
                    required/>    
                {showPassword ? 
                    <img className={styles.password_icon} src={icons['hide']} onClick={handleViewPassword}/> : 
                    <img className={styles.password_icon} src={icons['show']} onClick={handleViewPassword}/>}        
            </div>
            <p className={styles.requirements} style={error ? {color: 'red'} : {}}>
                Password must be at least 8 characters
            </p>
        </fieldset>
    )
}

export default EnterPassword;