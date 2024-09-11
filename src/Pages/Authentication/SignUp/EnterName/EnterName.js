import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterName() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleName = (e) => {
        e.target.setCustomValidity('');
        setName(e.target.value);
        setError('');
    }   

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('Can\'t be empty');
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('Can\'t be empty');
    }

    return( 
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Name
            </label>
            <input 
                type='name' 
                name='name'
                className={styles.input} 
                value={name} 
                onChange={handleName}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required/>
            {error === 'Can\'t be empty' && <div className={styles.errorMessage}>{error}</div>}
        </fieldset>
    )
}

export default EnterName;