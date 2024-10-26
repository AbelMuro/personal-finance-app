import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterIncome() {
    const [target, setTarget] = useState('');
    const [error, setError] = useState('');

    const handleTarget = (e) => {
        const input = e.target.value;
        const integer = Number(input);
        if(integer > 99999) return;

        if(input === '' || input.match(/^\d+$/) || input.match(/^\d+\.{1}$/) || input.match(/^\d+\.\d{0,2}$/)){
            e.target.setCustomValidity('');
            setError('');
            setTarget(e.target.value);            
        }

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
                Income
            </label>
            <div className={styles.input_container}>
                <input 
                    type='text' 
                    name='income'
                    placeholder='e.g 2000' 
                    className={styles.input}
                    value={target}
                    onChange={handleTarget}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    />
                <p className={styles.dollarSign}>
                    $
                </p>
            </div>
            {error === "can't be empty" && <p className={styles.error_message}>{error}</p>}
        </fieldset>
    )
}

export default EnterIncome;