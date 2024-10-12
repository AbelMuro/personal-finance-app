import React, {useState, useContext} from 'react';
import { PotsContext } from '@/Pot';
import {overlayVariant, dialogVariant} from './Variants';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './styles.module.css';

//this is where i left off
function AddMoney() {
    const [open, setOpen] = useState(false);
    const {name} = useContext(PotsContext);

    const handleOpen = () => {
        setOpen(!open);
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
                        </motion.dialog>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default AddMoney;