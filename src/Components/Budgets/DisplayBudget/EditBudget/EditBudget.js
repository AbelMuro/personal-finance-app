import React, {useState} from 'react';
import BudgetForm from './BudgetForm';
import icons from './icons';
import * as styles from './styles.module.css';
import {overlayVariant, dialogVariant} from './Variants';
import { AnimatePresence, motion } from 'framer-motion';

function EditBudget() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button className={styles.budget_button} onClick={handleOpen}>
                <img src={icons['threeDots']}/>
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
                                    Edit Budget
                                </h1>
                                <button className={styles.dialog_close} onClick={handleOpen}></button>
                                <p className={styles.dialog_desc}>
                                    As your budgets change, feel free to update your spending limits
                                </p>
                                <BudgetForm/>
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default EditBudget;