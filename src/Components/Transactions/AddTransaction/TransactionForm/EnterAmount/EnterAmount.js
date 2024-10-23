import React, {useState} from 'react';
import IncreaseOrDecrease from './IncreaseOrDecrease';
import * as styles from './styles.module.css';
import icons from './icons';

function EnterAmount() {
        const [amount, setAmount] = useState('');
        const [error, setError] = useState('');
    
        const handleAmount = (e) => {
            const input = e.target.value;
            const integer = Number(input);
            if(integer > 9999)
                return;

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
            setError("Can't be empty")
        }
    
        return(
            <fieldset className={styles.container}>
                <label>
                    Amount
                </label>
                <IncreaseOrDecrease/>                
                <div className={styles.container_input}>
                    <input 
                        type='text' 
                        placeholder='e.g 25.00' 
                        name='amount'
                        value={amount} 
                        onChange={handleAmount} 
                        onBlur={handleBlur}
                        onInvalid={handleInvalid}
                        required/>
                    <img className={styles.dollarSign} src={icons['dollarSign']}/>                    
                </div>
                {error === "Can't be empty" && <div className={styles.errorMessage}>{error}</div>}
            </fieldset>
        )
}

export default EnterAmount;