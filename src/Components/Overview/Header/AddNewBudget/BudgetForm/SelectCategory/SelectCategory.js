import React, {useState} from 'react';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion'
import { dropdownVariant } from './Variants';
import icons from './icons';


//this is where i left off, i need to figure out why i keep getting a blank screen everytime i make changes here
function SelectCategory() {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('Entertainment');

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleCategory = (category) => {
        setCategory(category)
    }

    return(
        <fieldset className={styles.container} onClick={handleOpen}>
            <strong>
                Budget Category
            </strong>
            <div className={styles.selectbox}>
                {category}
                <img className={styles.selectbox_arrow} src={icons['arrow']} style={open ? openArrowStyles : {}}/>
            </div>
            <AnimatePresence>
                {open && 
                    <motion.ul 
                        className={styles.dropdown} 
                        variants={dropdownVariant} 
                        initial='hide'
                        animate='show'
                        exit='exit'
                        >
                            <li onClick={() => handleCategory('Entertainment')}>
                                Entertainment
                            </li>
                            <li onClick={() => handleCategory('Bills')}>
                                Bills
                            </li>
                            <li onClick={() => handleCategory('Groceries')}>
                                Groceries
                            </li>
                            <li onClick={() => handleCategory('Dining Out')}>
                                Dining Out
                            </li>
                            <li onClick={() => handleCategory('Transportation')}>
                                Transportation
                            </li>
                            <li onClick={() => handleCategory('Personal Care')}>
                                Personal Care
                            </li>
                            <li onClick={() => handleCategory('Education')}>
                                Education
                            </li>
                    </motion.ul>}
            </AnimatePresence>

        </fieldset>
    )
}

export default SelectCategory;