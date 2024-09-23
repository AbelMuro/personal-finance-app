import React, {useState} from 'react';
import * as styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import {dropdownVariant} from './Variants';

function MobileCategory() {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('All Transactions');

    const handleCategory = (category) => {
        setCategory(category);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <div className={styles.category} onClick={handleOpen}>
            <div className={styles.category_icon}/>
            <AnimatePresence>
                    {
                        open &&
                        <motion.div 
                            className={styles.category_dropdown}
                            variants={dropdownVariant}
                            initial='hide'
                            animate='show'
                            exit='exit'
                            >
                            <ul className={styles.category_dropdown_list}>
                                <li>
                                    Category
                                </li>
                                <li onClick={() => handleCategory('All Transactions')} style={category === 'All Transactions' ? {fontWeight: 700} : {}}>
                                    All Transactions
                                </li>
                                <li onClick={() => handleCategory('Entertainment')} style={category === 'Entertainment' ? {fontWeight: 700} : {}}>
                                    Entertainment
                                </li>
                                <li onClick={() => handleCategory('Bills')} style={category === 'Bills' ? {fontWeight: 700} : {}}>
                                    Bills
                                </li>
                                <li onClick={() => handleCategory('Groceries')} style={category === 'Groceries' ? {fontWeight: 700} : {}}>
                                    Groceries
                                </li>
                                <li onClick={() => handleCategory('Dining Out')} style={category === 'Dining Out' ? {fontWeight: 700} : {}}>
                                    Dining Out
                                </li>
                                <li onClick={() => handleCategory('Transportation')} style={category === 'Transportation' ? {fontWeight: 700} : {}}>
                                    Transportation
                                </li>
                                <li onClick={() => handleCategory('Personal Care')} style={category === 'Personal Care' ? {fontWeight: 700} : {}}>
                                    Personal Care
                                </li>
                            </ul>
                        </motion.div>    
                    }                    
                </AnimatePresence>
        </div>
    )
}

export default MobileCategory;