import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterPotName() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleName = (e) => {
        const input = e.target.value;
        if(input.length > 30) return;
        e.target.setCustomValidity('');
        setError('');
        setName(input);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError("can't be empty");
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError("can't be empty")
    }

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Pot Name
            </label>
            <input 
                type='text' 
                name='potName'
                placeholder='e.g Rainy Days' 
                className={styles.input}
                value={name}
                onChange={handleName}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                />
            {error === "can't be empty" && <p className={styles.error_message}>{error}</p>}
            <p className={styles.characters_left}>
                {30 - name.length} characters left
            </p>
        </fieldset>
    )
}

export default EnterPotName;