import React from 'react';
import EnterTitle from './EnterTitle';
import SelectDueDate from './SelectDueDate';
import * as styles from './styles.module.css';

function BillForm() {
    return(
        <form className={styles.form}>
            <EnterTitle/>
            <SelectDueDate/>
        </form>
    )
}

export default BillForm;