import React from 'react';
import SelectCategory from './SelectCategory'
import * as styles from './styles.module.css';

function BudgetForm() {
    return(
        <form className={styles.form}>
            <SelectCategory/>
        </form>
    )
}

export default BudgetForm;