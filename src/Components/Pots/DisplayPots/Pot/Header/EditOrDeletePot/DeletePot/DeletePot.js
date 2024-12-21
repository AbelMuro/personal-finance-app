import React, {useState, useContext} from 'react';
import { PotsContext } from '@/Pot';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import { overlayVariant, dialogVariant } from './Variants';
import {ClipLoader} from 'react-spinners';
import * as styles from './styles.module.css';

function DeletePot({handleOpen}) {
    const {potId, name} = useContext(PotsContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const response = await fetch(`https://finance-app-server.netlify.app/delete_pot/${potId}`, {
            method: 'DELETE',
            credentials: 'include',
        });

        if(response.status === 200){
            const result = await response.text();
            console.log(result);
            const event = new Event('database-update');
            document.dispatchEvent(event);
        }
        else if(response.status === 500){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000);
            return;
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
                            Delete ‘{name}’
                        </h1>
                        <button className={styles.dialog_close} onClick={handleOpen}/>
                        <p className={styles.dialog_desc}>
                            Are you sure you want to delete this pot? 
                            This action cannot be reversed, 
                            and all the data inside it will 
                            be removed forever.
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

export default DeletePot;