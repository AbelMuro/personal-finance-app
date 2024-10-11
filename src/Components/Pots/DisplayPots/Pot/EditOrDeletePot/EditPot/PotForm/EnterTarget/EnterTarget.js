import React, {useState, useContext} from 'react';
import {PotsContext} from '@/Pot'
import * as styles from './styles.module.css';

function EnterTarget() {
    const {target} = useContext(PotsContext);
    const [newTarget, setNewTarget] = useState(target);
    const [error, setError] = useState('');

    const handleTarget = (e) => {
        const input = e.target.value;
        if(input.match(/\D/) || Number(input) > 9999) return;
        e.target.setCustomValidity('');
        setError('');
        setNewTarget(input);
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
            <div className={styles.input_container}>
                <input 
                    type='text' 
                    name='target'
                    placeholder='e.g 2000' 
                    className={styles.input}
                    value={newTarget}
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

export default EnterTarget;