import React, {useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {dropdownVariant} from './Variants';
import * as styles from './styles.module.css';

function MobileSort(){
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('Latest');

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleQuery = (query) => {
        setQuery(query);
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
                                <li onClick={() => handleQuery('Latest')} style={query === 'Latest' ? {fontWeight: 700} : {}}>
                                    Latest
                                </li>
                                <li onClick={() => handleQuery('Oldest')} style={query === 'Oldest' ? {fontWeight: 700} : {}}>
                                    Oldest
                                </li>
                                <li onClick={() => handleQuery('A to Z')} style={query === 'A to Z' ? {fontWeight: 700} : {}}>
                                    A to Z
                                </li>
                                <li onClick={() => handleQuery('Z to A')} style={query === 'Z to A' ? {fontWeight: 700} : {}}>
                                    Z to A
                                </li>
                                <li onClick={() => handleQuery('Highest')} style={query === 'Highest' ? {fontWeight: 700} : {}}>
                                    Highest
                                </li>
                                <li onClick={() => handleQuery('Lowest')} style={query === 'Lowest' ? {fontWeight: 700} : {}}>
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