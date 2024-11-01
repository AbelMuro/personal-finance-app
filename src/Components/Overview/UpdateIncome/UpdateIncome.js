import React, {useState} from 'react';
import * as styles from './styles.module.css';
import { overlayVariant, dialogVariant } from './Variants';
import { AnimatePresence, motion } from 'framer-motion';
import IncomeForm from './IncomeForm';

function UpdateIncome(){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button className={styles.header_button} onClick={handleOpen}>
                + Add Income
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
                                    Update Income
                                </h1>
                                <button className={styles.dialog_close} onClick={handleOpen}></button>
                                <p className={styles.dialog_desc}>
                                    Please enter your monthly income
                                </p>
                                <IncomeForm handleOpen={handleOpen}/>
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default UpdateIncome;