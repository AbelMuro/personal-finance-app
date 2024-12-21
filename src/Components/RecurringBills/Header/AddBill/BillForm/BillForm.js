import React, {useState} from 'react';
import EnterTitle from './EnterTitle';
import SelectDueDate from './SelectDueDate';
import EnterAmountDue from './EnterAmountDue';
import UploadImage from './UploadImage';
import {useNavigate} from 'react-router-dom'
import {ClipLoader} from 'react-spinners';
import {v4 as uuid} from 'uuid';
import * as styles from './styles.module.css';

function BillForm({handleOpen}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const title = e.target.elements.title.value;
        const dueDate = e.target.elements.dueDate.value;
        const amountDue = e.target.elements.amount.value;
        const image = e.target.elements.image.files[0];
        const id = uuid();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('dueDate', dueDate);
        formData.append('amountDue', amountDue);
        formData.append('image', image);
        formData.append('order', Date.now());
        formData.append('id', id);

        const response = await fetch('https://finance-app-server.netlify.app/add_bill', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });

        if(response.status === 200){
            const result = await response.text();
            console.log(result);
            handleOpen();
            const event = new Event('database-update');
            document.dispatchEvent(event);
        }
        else if(response.status === 401){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again');
            }, 1000);
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
            <EnterTitle/>
            <SelectDueDate/>
            <EnterAmountDue/>
            <UploadImage/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size='35px' color='white'/> : 'Submit'}
            </button>
        </form>
    )
}

export default BillForm;