import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';
import EditBudget from './EditBudget';
import DeleteBudget from './DeleteBudget';
import {dropdownVariant} from './Variants';
import { AnimatePresence, motion } from 'framer-motion';

//this is where i left off, i will need to create the delete budget dialog here
function EditOrDeleteBudget() {
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
                <button className={styles.budget_button} onClick={handleEditOrDelete}>
                    <img src={icons['threeDots']}/>
                </button>
                <AnimatePresence> 
                    {openEditOrDelete && 
                        <motion.div 
                            className={styles.budget_dropdown} 
                            onClick={handleEditOrDelete} 
                            transition={{
                                duration: 0.3
                            }}
                            variants={dropdownVariant} 
                            initial='hide' 
                            animate='show' 
                            exit='exit'>
                                <button onClick={handleOpenEdit}>
                                    Edit Budget
                                </button>
                                <button onClick={handleOpenDelete}>
                                    Delete Budget
                                </button>
                        </motion.div>
                    }
                </AnimatePresence>            
            </div>
            <AnimatePresence>
                {
                    openEdit && <EditBudget handleOpen={handleOpenEdit} key='edit'/>
                }
                {
                    openDelete && <DeleteBudget handleOpen={handleOpenDelete} key='delete'/>
                }
            </AnimatePresence>
        </>
    )
}

export default EditOrDeleteBudget;