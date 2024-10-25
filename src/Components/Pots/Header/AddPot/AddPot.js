import React, {useState} from 'react';
import PotForm from './PotForm';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayVariant, dialogVariant } from './Variants';

function AddPot() {
    const [open, setOpen] = useState(false);
    const pots = useSelector(state => state.pots.pots);

    const handleOpen = () => {
        if(pots.length === 15){
            alert("You can't create any more pots, consider deleting existing pots");
            return;
        }
        setOpen(!open);
    }

    return(
    <>
        <button className={styles.header_button} onClick={handleOpen}>
            + Add New Pot
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
                                Add New Pot
                            </h1>
                            <button className={styles.dialog_close} onClick={handleOpen}></button>
                            <p className={styles.dialog_desc}>
                                Create a pot to set savings targets. 
                                These can help keep you on track as you save for special purchases.
                            </p>
                        <PotForm handleOpen={handleOpen}/>
                    </motion.dialog>
            </motion.div>}
        </AnimatePresence>
    </>
    )
}

export default AddPot;