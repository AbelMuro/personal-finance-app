import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterTarget() {
    const [target, setTarget] = useState('');
    const [error, setError] = useState('');

    const handleTarget = (e) => {
        const input = e.target.value;
        if(input.match(/\D/) || Number(input) > 9999) return;
        e.target.setCustomValidity('');
        setError('');
        setTarget(e.target.value);
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
                Target
            </label>
            <input 
                type='text' 
                name='target'
                placeholder='e.g 2000' 
                className={styles.input}
                value={target}
                onChange={handleTarget}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                />
            {error === "can't be empty" && <p className={styles.error_message}>{error}</p>}
        </fieldset>
    )
}

export default EnterTarget;