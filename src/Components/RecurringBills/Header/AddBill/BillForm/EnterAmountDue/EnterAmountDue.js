import React, {useState} from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function EnterAmountDue() {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    
    const handleAmount = (e) => {
        const input = e.target.value;
        e.target.setCustomValidity('');
        setError('');

        if((input.match(/\d/) && Number(input) <= 10000) || input === '')
            setAmount(input);
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
            <label className={styles.label} htmlFor='amount'>
                Enter Amount Due
            </label>
            <div className={styles.input_container}>
                <input 
                    type='text' 
                    id='amount' 
                    name='amount'
                    placeholder='e.g. 2000'
                    className={styles.input}
                    value={amount}
                    onChange={handleAmount}
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

export default EnterAmountDue;