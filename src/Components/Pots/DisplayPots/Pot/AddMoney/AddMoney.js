import React, {useState, useContext} from 'react';
import { ClipLoader } from 'react-spinners';
import DisplayTotalAmount from './DisplayTotalAmount';
import EnterAmount from './EnterAmount';
import { useNavigate} from 'react-router-dom';
import { PotsContext } from '@/Pot';
import {overlayVariant, dialogVariant} from './Variants';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './styles.module.css';

function AddMoney() {
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const {name, potId, savings} = useContext(PotsContext);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const amount = e.target.elements.amount.value;
        const response = await fetch('http://localhost:4000/edit_pot', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                potId,
                savings: Number(amount) + savings
            }),
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
        setAmount && setAmount(0);
    }

    return(
        <>
            <button className={styles.button} onClick={handleOpen}>
                + Add Money
            </button>     
            <AnimatePresence>
                {
                open && 
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
                                    Add to ‘{name}’
                                </h1>
                                <button className={styles.dialog_close} onClick={handleOpen}></button>
                                <p className={styles.dialog_desc}>
                                    Enter the amount that you would like to add to this pot
                                </p>
                                <DisplayTotalAmount amount={amount}/>
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <EnterAmount amount={amount} setAmount={setAmount} />
                                    <button className={styles.form_button}>
                                        {loading ? <ClipLoader size='35px' color='white'/> : 'Confirm Addition'}
                                    </button>
                                </form>
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default AddMoney;