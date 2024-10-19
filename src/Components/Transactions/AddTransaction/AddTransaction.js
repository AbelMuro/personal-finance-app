import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import * as styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import {overlayVariant, dialogVariant} from './Variants';

function AddTransaction() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button className={styles.button} onClick={handleOpen}>
                + Add Transaction
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
                                    Add New Transaction
                                </h1>
                                <button className={styles.dialog_close} onClick={handleOpen}></button>
                                <p className={styles.dialog_desc}>
                                    Enter transaction details
                                </p>
                                <TransactionForm handleOpen={handleOpen}/>
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default AddTransaction;