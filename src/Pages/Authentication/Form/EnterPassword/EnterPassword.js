import React from 'react';
import {useState} from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function EnterPassword() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleViewPassword = () => {
        //this is where i left off, i will need to find a way to display the password programmatically
    }

    const handlePassword = (e) => {
        e.target.setCustomValidity('');
        setPassword(e.target.value);
        setError('');
    }   

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('can\'t be empty');
    }

    const handleInvalid = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(' ');

        if(isEmpty)
            setError('can\'t be empty');
    }

    return( 
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Email
            </label>
            <input 
                type='password' 
                className={styles.input} 
                value={password} 
                onChange={handlePassword}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required/>
            <img className={styles.password_icon} src={icons['show']} onClick={handleViewPassword}/>
            {error === 'can\'t be empty' && <div className={styles.errorMessage}>{error}</div>}
        </fieldset>
    )
}

export default EnterPassword;