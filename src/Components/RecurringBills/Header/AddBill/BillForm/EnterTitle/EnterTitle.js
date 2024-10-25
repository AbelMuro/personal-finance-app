import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterTitle() {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    
    const handleSpending = (e) => {
        const input = e.target.value;
        if(input.length > 30) return;
        e.target.setCustomValidity('');
        setError('');
        setTitle(input);
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
            <label className={styles.label} htmlFor='title'>
                Enter Title
            </label>
                <input 
                    type='text' 
                    id='title' 
                    name='title'
                    placeholder='e.g. Spark Electric Solutions'
                    className={styles.input}
                    value={title}
                    onChange={handleSpending}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    />           
            {error && <div className={styles.errorMessage}>
                {error}
            </div>}
        </fieldset>
    )
}

export default EnterTitle;