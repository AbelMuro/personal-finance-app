import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import BudgetForm from './BudgetForm';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import {overlayVariant, dialogVariant} from './Variants';

function AddNewBudget() {
    const [open, setOpen] = useState(false);
    const budgets = useSelector(state => state.budgets.budgets);
 
    const handleOpen = () => {
        if(budgets.length === 8) {
            alert("You can't make any more budgets, consider deleting existing budgets");
            return;
        }
        setOpen(!open);
    }

    return(
        <>
            <button className={styles.header_button} onClick={handleOpen}>
                + Add New Budget
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
                                    Add New Budget
                                </h1>
                                <button className={styles.dialog_close} onClick={handleOpen}></button>
                                <p className={styles.dialog_desc}>
                                    Choose a category to set a spending budget. 
                                    These categories can help you monitor spending.
                                </p>
                                <BudgetForm handleOpen={handleOpen}/>
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default AddNewBudget;