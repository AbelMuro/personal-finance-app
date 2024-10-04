import React, {useState, useRef} from 'react';
import { dropdownVariant, } from './Variants';
import {AnimatePresence, motion} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function SelectCategory() {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('Entertainment');
    const allCategoriesRef = useRef(['Entertainment', 'Bills', 'Groceries', 'Dining Out', 'Transportation', 'Personal Care', 'Education', 'General']);

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
                Transaction Category
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
                            {allCategoriesRef.current.map((category) => {
                                    return (
                                    <li onClick={() => handleCategory(category)} key={category}>
                                        {category}
                                    </li>
                                )
                            })}
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='category' value={category}/>
        </fieldset>
    )
}

export default SelectCategory;