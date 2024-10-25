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
        else if(response.status === 401){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }
        else{
            const message = await response.text();
            console.log(message);
            setTimeout(() => {
                alert('Internal server error occured, please try again later')
            }, 500)
        }

    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <SelectCategory handleOpenDialog={handleOpen}/>
            <EnterMaxSpending/>
            <SelectTheme/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size={35} color='white'/> : 'Add Budget'}
            </button>
        </form>
    )
}

export default BudgetForm;