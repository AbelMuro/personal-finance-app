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
            setError('Invalid')
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('Can\'t be empty');
        else    
            setError('Invalid');
    }

    return( 
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Email
            </label>
            <input 
                type='email' 
                name='email'
                className={styles.input} 
                value={email} 
                onChange={handleEmail}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required/>
            {error === 'Can\'t be empty' && <div className={styles.errorMessage}>{error}</div>}
            {error === 'Invalid' && <div className={styles.errorMessage}>Invalid email</div>}
        </fieldset>
    )
}

export default EnterEmail;