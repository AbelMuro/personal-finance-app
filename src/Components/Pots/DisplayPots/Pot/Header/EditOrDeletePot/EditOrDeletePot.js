import React, {useState} from 'react';
import EditPot from './EditPot';
import DeletePot from './DeletePot';
import { AnimatePresence, motion } from 'framer-motion';
import {dropdownVariant} from './Variants'
import * as styles from './styles.module.css';
import icons from './icons';

function EditOrDeletePot(){
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openEditOrDelete, setOpenEditOrDelete] = useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    }

    const handleOpenDelete = () => {
        setOpenDelete(!openDelete);
    } 

    const handleEditOrDelete = () => {
        setOpenEditOrDelete(!openEditOrDelete);
    }

    return(
        <>
            <div className={styles.container}>
                <button className={styles.button} onClick={handleEditOrDelete}>
                    <img src={icons['threeDots']}/>
                </button>
                <AnimatePresence> 
                    {openEditOrDelete && 
                        <motion.div 
                            className={styles.dropdown} 
                            onClick={handleEditOrDelete} 
                            transition={{
                                duration: 0.3
                            }}
                            variants={dropdownVariant} 
                            initial='hide' 
                            animate='show' 
                            exit='exit'>
                                <button onClick={handleOpenEdit}>
                                    Edit Pot
                                </button>
                                <button onClick={handleOpenDelete}>
                                    Delete Pot
                                </button>
                        </motion.div>
                    }
                </AnimatePresence>            
            </div>
            <AnimatePresence>
                {
                    openEdit && <EditPot handleOpen={handleOpenEdit} key='edit'/>
                }
                {
                    openDelete && <DeletePot handleOpen={handleOpenDelete} key='delete'/>
                }
            </AnimatePresence>
        </>
    )
}

export default EditOrDeletePot;