import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './styles.module.css';
import { dropdownVariant } from './Variants';

function MobileSort() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.transactions.sort);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSort = (query) => {
        dispatch({type: 'UPDATE_SORT_BILLS', payload: query});
    }

    return(
        <div className={styles.sort} onClick={handleOpen}>
            <div className={styles.sort_icon}/>
            <AnimatePresence>
                    {
                        open &&
                        <motion.div 
                            className={styles.sort_dropdown}
                            variants={dropdownVariant}
                            initial='hide'
                            animate='show'
                            exit='exit'
                            >
                            <ul className={styles.sort_dropdown_list}>
                                <li>
                                    Sort by
                                </li>
                                <li onClick={() => handleSort('Latest')} style={sort === 'Latest' ? {fontWeight: 700} : {}}>
                                    Latest
                                </li>
                                <li onClick={() => handleSort('Oldest')} style={sort === 'Oldest' ? {fontWeight: 700} : {}}>
                                    Oldest
                                </li>
                                <li onClick={() => handleSort('A to Z')} style={sort === 'A to Z' ? {fontWeight: 700} : {}}>
                                    A to Z
                                </li>
                                <li onClick={() => handleSort('Z to A')} style={sort === 'Z to A' ? {fontWeight: 700} : {}}>
                                    Z to A
                                </li>
                                <li onClick={() => handleSort('Highest')} style={sort === 'Highest' ? {fontWeight: 700} : {}}>
                                    Highest
                                </li>
                                <li onClick={() => handleSort('Lowest')} style={sort === 'Lowest' ? {fontWeight: 700} : {}}>
                                    Lowest
                                </li>
                            </ul>
                        </motion.div>    
                    }                    
                </AnimatePresence>
        </div>
    )
}

export default MobileSort;