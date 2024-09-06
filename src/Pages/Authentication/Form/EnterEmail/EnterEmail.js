import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterEmail() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (e) => {
        e.target.setCustomValidity('');
        setEmail(e.target.value);
        setError('');
    }   

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isEmpty)
            setError('Can\'t be empty');
        else if(isInvalid)
            setError('Invalid email')
    }

    const handleInvalid = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(' ');

        if(isEmpty)
            setError('can\'t be empty');
        else 
            setError('invalid email')
    }

    return( 
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Email
            </label>
            <input 
                type='email' 
                className={styles.input} 
                value={email} 
                onChange={handleEmail}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required/>
            {error === 'Can\'t be empty' && <div className={styles.errorMessage}>{error}</div>}
            {error === 'Invalid email' && <div className={styles.errorMessage}>{error}</div>}
        </fieldset>
    )
}

export default EnterEmail;