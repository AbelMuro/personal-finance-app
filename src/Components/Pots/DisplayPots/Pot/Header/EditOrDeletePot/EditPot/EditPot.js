import React from 'react';
import PotForm from './PotForm';
import * as styles from './styles.module.css';
import {motion} from 'framer-motion';
import { overlayVariant, dialogVariant } from './Variants';

function EditPot({handleOpen}) {

    return (
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
                            Edit Pot
                        </h1>
                        <button className={styles.dialog_close} onClick={handleOpen}></button>
                        <p className={styles.dialog_desc}>
                            If your saving targets change, feel free to update your pots
                        </p>
                        <PotForm handleOpen={handleOpen}/>
                </motion.dialog>
        </motion.div>
    )
}

export default EditPot;