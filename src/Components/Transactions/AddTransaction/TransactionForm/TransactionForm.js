import React from 'react';
import EnterRecipient from './EnterRecipient';
import * as styles from './styles.module.css';

function TransactionForm() {
    return(
        <form className={styles.form}>
            <EnterRecipient/>
        </form>
    )
}

export default TransactionForm;