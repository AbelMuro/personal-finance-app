import React from 'react';
import SelectCategory from './SelectCategory';
import EnterMaxSpending from './EnterMaxSpending';
import SelectTheme from './SelectTheme';
import * as styles from './styles.module.css';

function BudgetForm() {

    const handleSubmit = async (e) => {
        const category = e.target.elements.category.value;
        const maxSpending = e.target.elements.maxSpending.value;
        const theme = e.target.elements.theme.value;

        const response = await fetch('http://localhost:4000/add_budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category,
                maxSpending,
                theme
            })
        })
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <SelectCategory/>
            <EnterMaxSpending/>
            <SelectTheme/>
            <button className={styles.form_submit}>
                Add Budget
            </button>
        </form>
    )
}

export default BudgetForm;