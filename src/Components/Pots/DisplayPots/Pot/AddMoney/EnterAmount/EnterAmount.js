import React, {useState, useContext} from 'react';
import { PotsContext } from '@/Pot';
import * as styles from './styles.module.css';

function EnterAmount({amount, setAmount}) {
    const {target, savings} = useContext(PotsContext);
    const [error, setError] = useState('');

    const handleAmount = (e) => {
        const input = e.target.value;
        const integer = Number(input);
        const limit = target - savings;
        if(isNaN(integer) || integer < 0 || integer > limit) return;

        if(input === '' || input.match(/^\d+$/) || input.match(/^\d+\.{1}$/) || input.match(/^\d+\.\d{0,2}$/)){
            e.target.setCustomValidity('');
            setError('');
            setAmount(input);            
        }

    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        if(isEmpty)
            setError("Can't be empty");
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError("Can't be empty");
    }

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Amount to Add
            </label>
            <div className={styles.input_container}>
                <input 
                    type='text' 
                    name='amount'
                    className={styles.input} 
                    value={amount}
                    onChange={handleAmount}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    /> 
                <p className={styles.dollarSign}>
                    $
                </p>                               
            </div>
            {error === "Can't be empty" && <div className={styles.errorMessage}>{error}</div>}
        </fieldset>
    )
}

export default EnterAmount;