import React, {useState} from 'react';
import { ClipLoader } from 'react-spinners';
import SelectCategory from './SelectCategory';
import EnterMaxSpending from './EnterMaxSpending';
import SelectTheme from './SelectTheme';
import {v4 as uuid} from 'uuid';
import * as styles from './styles.module.css';

function BudgetForm({handleOpen}) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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
                totalSpent: 0,
                theme,
                transactions: []
            })
        });

        if(response.status === 200){
            console.log('profile updated'); 
            handleOpen();
            const event = new Event('database-update');
            document.dispatchEvent(event)
            setLoading(false);             
        }
            
        else{
            const message = await response.text();
            console.log(result);
            alert('Your login has expired, please log in again');
            navigate('/');
        }

    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <SelectCategory/>
            <EnterMaxSpending/>
            <SelectTheme/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size={35} color='white'/> : 'Add Budget'}
            </button>
        </form>
    )
}

export default BudgetForm;