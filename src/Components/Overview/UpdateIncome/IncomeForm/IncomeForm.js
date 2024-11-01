import React, {useState} from 'react';
import EnterIncome from './EnterIncome';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';
import { ClipLoader } from 'react-spinners';

//
function IncomeForm({handleOpen}) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const income = e.target.elements.income.value;

        const response = await fetch('https://finance-app-server-5991576c358c.herokuapp.com/update_income', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                income: Number(income)
            }),
            credentials: 'include'
        });

        if(response.status === 200){
            console.log('income updated'); 
            handleOpen();
            const event = new Event('database-update');
            document.dispatchEvent(event)       
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
        <form className={styles.container} onSubmit={handleSubmit}>
            <EnterIncome/>
            <button className={styles.submit}>
                {loading ? <ClipLoader size='35px' color='white'/> : 'Submit'}
            </button>
        </form>
    )
}

export default IncomeForm