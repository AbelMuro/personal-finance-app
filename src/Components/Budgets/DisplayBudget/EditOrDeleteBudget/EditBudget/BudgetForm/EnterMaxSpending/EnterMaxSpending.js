import React, {useState, useContext} from 'react';
import {Budget} from '`/DisplayBudget';
import * as styles from './styles.module.css';
import icons from './icons';

function EnterMaxSpending() {
    const {limit} = useContext(Budget);
    const [spending, setSpending] = useState(limit);
    const [error, setError] = useState('');
    
    const handleSpending = (e) => {
        const input = e.target.value;
        e.target.setCustomValidity('');
        setError('');

        if((input.match(/\d/) && Number(input) <= 10000) || input === '')
            setSpending(input);
    }

    const handleBlur = (e) => {     
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError("can't be empty");
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError("can't be empty");
    }

    return(
        <fieldset className={styles.container}>
            <label className={styles.label} htmlFor='maxSpending'>
                Maximum Spending
            </label>
            <div className={styles.input_container}>
                <input 
                    type='text' 
                    id='maxSpending' 
                    name='limit'
                    placeholder='e.g. 2000'
                    className={styles.input}
                    value={spending}
                    onChange={handleSpending}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    />       
                <img className={styles.input_icon} src={icons['dollarSign']}/>         
            </div>
            {error && <div className={styles.errorMessage}>
                {error}
            </div>}
        </fieldset>
    )
}

export default EnterMaxSpending;