import React from 'react';
import EnterRecipient from './EnterRecipient';
import SelectCategory from './SelectCategory';
import EnterAmount from './EnterAmount';
import UploadImage from './UploadImage';
import * as styles from './styles.module.css';

function TransactionForm() {
    return(
        <form className={styles.form}>
            <EnterRecipient/>
            <SelectCategory/>
            <EnterAmount/>
            <div className={styles.buttons}>
                <UploadImage/>
            </div>
        </form>
    )
}

export default TransactionForm;