import React, {useContext, useState} from 'react';
import { ClipLoader } from 'react-spinners';
import {Budget} from '`/DisplayBudget';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';
import { overlayVariant, dialogVariant } from './Variants';

function DeleteBudget({handleOpen}) {
    const [loading, setLoading] = useState(false);
    const {category, budgetId} = useContext(Budget);

    const handleDelete = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/delete_budget/${budgetId}`, {
            method: 'DELETE',
            credentials: 'include',
        });

        if(response.status === 200){
            const result = await response.text();
            console.log(result);
            const event = new Event('database-update');
            document.dispatchEvent(event);
        }
        else{
            const message = await response.text();
            console.log(message);
        }
        handleOpen();
        setLoading(false);
    }

    const handleCancel = () => {
        handleOpen();
    }

    return(
        <motion.div 
            className={styles.overlay} 
            variants={overlayVariant} 
            initial='hide' 
            animate='show'
            exit='exit'>
                <motion.dialog 
                    open={true}
                    className={styles.dialog}
                    variants={dialogVariant}
                    initial='hide'
                    animate='show'
                    exit='exit'>
                        <h1 className={styles.dialog_title}>
                            Delete ‘{category}’
                        </h1>
                        <button className={styles.dialog_close} onClick={handleOpen}/>
                        <p className={styles.dialog_desc}>
                            Are you sure you want to delete this budget? 
                            This action cannot be reversed, and all 
                            the data inside it will be removed forever.
                        </p>
                        <button className={styles.dialog_confirm} onClick={handleDelete}>
                            {loading ? <ClipLoader size={35} color='white'/> : 'Yes, Confirm Deletion'}
                        </button>
                        <button className={styles.dialog_back} onClick={handleCancel}>
                            No, Go Back
                        </button>
                </motion.dialog>
        </motion.div>
    )
}

export default DeleteBudget;