import React, {useState, useRef} from 'react';
import { ClipLoader } from 'react-spinners';
import EnterRecipient from './EnterRecipient';
import SelectCategory from './SelectCategory';
import EnterAmount from './EnterAmount';
import UploadImage from './UploadImage';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import * as styles from './styles.module.css';

function TransactionForm({handleOpen}) {
    const months = useRef(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const getDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = months.current[date.getMonth()];
        const year = date.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const transactionId = uuid();
        const recipient = e.target.elements.recipient.value;
        const category = e.target.elements.category.value;
        const amount = e.target.elements.amount.value;
        const plusOrMinus = e.target.elements.plusOrMinus.value;
        const image = e.target.elements.image.files[0];
        const date = getDate();

        const formData = new FormData();
        formData.append('transactionId', transactionId);
        formData.append('recipient', recipient);
        formData.append('category', category);
        formData.append('amount', amount);
        formData.append('plusOrMinus', plusOrMinus);
        formData.append('image', image);
        formData.append('date', date);
        formData.append('order', Date.now());

        const response = await fetch('http://localhost:4000/add_transaction', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });

        if(response.status === 200){
            const result = await response.text();
            handleOpen();
            console.log(result);
            const event = new Event('database-update');
            document.dispatchEvent(event);
        }
        else if(response.status === 403){
            const message = await response.text();
            console.log(message);
            alert(`You must create a budget with the category '${category}' first`);
        }
        else if(response.status === 401) {
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
            <EnterRecipient/>
            <SelectCategory/>
            <EnterAmount/>
            <UploadImage/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size='35px' color='white'/> : 'Submit'}
            </button>
        </form>
    )
}

export default TransactionForm;