import React from 'react';
import SelectCategory from './SelectCategory';
import EnterMaxSpending from './EnterMaxSpending';
import SelectTheme from './SelectTheme';
import {v4 as uuid} from 'uuid';
import * as styles from './styles.module.css';

function BudgetForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = e.target.elements.category.value;
        const limit = e.target.elements.limit.value;
        const theme = e.target.elements.theme.value;
        const id = uuid();

        const response = await fetch('http://localhost:4000/add_budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                id,
                category,
                limit : Number(limit),
                theme,
                transactions: []
            })
        });

        if(response.status === 200)
            console.log('profile updated');
        else{
            const result = await response.text();
            console.log(result);
        }
            
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