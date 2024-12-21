import React, {useState, useContext} from 'react';
import { ClipLoader } from 'react-spinners';
import {useNavigate} from 'react-router-dom';
import {Budget} from '`/DisplayBudget';
import SelectCategory from './SelectCategory';
import EnterMaxSpending from './EnterMaxSpending';
import SelectTheme from './SelectTheme';
import * as styles from './styles.module.css';

function BudgetForm({handleOpen}) {
    const [loading, setLoading] = useState(false);
    const {budgetId} = useContext(Budget);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const category = e.target.elements.category.value;
        const limit = e.target.elements.limit.value;
        const theme = e.target.elements.theme.value;

        const response = await fetch('https://finance-app-server.netlify.app/edit_budget', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: budgetId,
                category,
                limit: Number(limit),
                theme
            })
        });
        
        if(response.status === 200){
            handleOpen();
            const event = new Event('database-update');
            document.dispatchEvent(event);            
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
        setLoading && setLoading(false);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <SelectCategory/>
            <EnterMaxSpending/>
            <SelectTheme/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size={35} color='white'/> : 'Edit Budget'}
            </button>
        </form>
    )
}

export default BudgetForm;