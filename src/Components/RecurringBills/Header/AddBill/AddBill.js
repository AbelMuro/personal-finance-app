import React, {useState} from 'react';
import BillForm from './BillForm';
import * as styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayVariant, dialogVariant } from './Variants';

function AddBill() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button className={styles.addBill} onClick={handleOpen}>
                + Add Bill
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
                                    Add Bill
                                </h1>
                                <button className={styles.dialog_close} onClick={handleOpen}></button>
                                <p className={styles.dialog_desc}>
                                    Enter the details for the bill.
                                </p>
                                <BillForm handleOpen={handleOpen}/>
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default AddBill;