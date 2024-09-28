import React from 'react';
import SelectCategory from './SelectCategory';
import EnterMaxSpending from './EnterMaxSpending';
import SelectTheme from './SelectTheme';
import * as styles from './styles.module.css';

//this is where i left off, i will need to create an endpoint in node.js that tells me which themes and which categories have already been used
//then i will need to disable those categories and themes in the inputs below
function BudgetForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = e.target.elements.category.value;
        const maxSpending = e.target.elements.maxSpending.value;
        const theme = e.target.elements.theme.value;

        const response = await fetch('http://localhost:4000/add_budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                category,
                maxSpending,
                theme,
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