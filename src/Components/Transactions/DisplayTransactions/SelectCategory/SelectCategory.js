import React, {useState, useEffect} from 'react';
import {dropdownVariant} from './Variants';
import {motion, AnimatePresence} from 'framer-motion'
import icons from './icons';
import {useSelector} from 'react-redux'
import {useMediaQuery} from '~/Hooks'
import classnames from 'classnames';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SelectCategory() {
    const [category, setCategory] = useState('All Transactions');
    const [open, setOpen] = useState(false);
    const isMenuMimized = useSelector(state => state.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleCategory = (category) => {
        setCategory(category);
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery({});
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);    

    return(
        <div className={chooseQueries('category')} onClick={handleOpen}>
            Category
            <div className={styles.category_container}>
                <strong>
                    {category}
                </strong>
                <img className={styles.category_icon} src={icons['arrow']} style={open ? {transform: 'rotate(180deg)'} : {}}/>
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
        </div>
    )
}

export default SelectCategory;