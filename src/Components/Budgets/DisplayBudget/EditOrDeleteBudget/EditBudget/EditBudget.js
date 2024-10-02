import React from 'react';
import BudgetForm from './BudgetForm';
import {overlayVariant, dialogVariant} from './Variants';
import {motion } from 'framer-motion';
import * as styles from './styles.module.css';

function EditBudget({handleOpen}) {


    return <motion.div 
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
        </motion.div>
}

export default EditBudget;