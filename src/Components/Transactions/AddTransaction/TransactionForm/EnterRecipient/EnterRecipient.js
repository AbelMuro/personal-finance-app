import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterRecipient() {
    const [sender, setSender] = useState('');
    const [error, setError] = useState('');

    const handleSender = (e) => {
        const input = e.target.value;
        if(input.length > 20) return;
        e.target.setCustomValidity('');
        setError('');
        setSender(input);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError("Can't be empty");
    }

    const handleInvalid = () => {
        e.target.setCustomValidity(' ');
        setError("Can't be empty")
    }

    return(
        <fieldset className={styles.container}>
            <label>
                Recipient/Sender
            </label>
            <input 
                type='text' 
                placeholder='e.g Delta Taxi' 
                name='recipient'
                value={sender} 
                onChange={handleSender} 
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required/>
            {error === "Can't be empty" && <div className={styles.errorMessage}>{error}</div>}
        </fieldset>
    )
}

export default EnterRecipient;