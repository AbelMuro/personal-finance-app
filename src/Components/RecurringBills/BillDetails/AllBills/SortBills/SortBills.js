import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import icons from './icons';
import { AnimatePresence, motion } from 'framer-motion';
import{dropdownVariant} from './Variants';
 
function SortBills(){
    //const [chooseQueries] = useMenuMinMaxStyles({}, mediaQueryMax, styles);
    const dispatch = useDispatch();
    const sort = useSelector(state => state.bills.sort);
    const [open, setOpen] = useState(false);
    //const [mobile] = useMediaQuery('(max-width: 620px)');

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSort = (sort) => {
        dispatch({type: 'UPDATE_SORT_BILLS', payload: sort})
    } 

    return <div className={styles.container} onClick={handleOpen}>
            Sort by
            <div className={styles.sort_container}>
                <strong>
                    {sort}
                </strong>
                <img className={styles.sort_icon} src={icons['arrow']} style={open ? {transform: 'rotate(180deg)'} : {}}/>
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
        </div>
}

export default SortBills;