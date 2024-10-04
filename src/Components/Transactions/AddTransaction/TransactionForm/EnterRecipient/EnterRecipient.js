import React from 'react';
import * as styles from './styles.module.css';

//this is where i left off, i will need to make this into a controlled component

function EnterRecipient() {
    return(
        <fieldset className={styles.container}>
            <label>
                Recipient/Sender
            </label>
            <input type='text' placeholder='e.g Delta Taxi'/>
        </fieldset>
    )
}

export default EnterRecipient;