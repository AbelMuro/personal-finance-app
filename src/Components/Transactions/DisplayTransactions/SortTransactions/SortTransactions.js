import React, {useState, useEffect} from 'react';
import { dropdownVariant } from './Variants';
import {motion, AnimatePresence} from 'framer-motion'
import {useSelector} from 'react-redux';
import {useMediaQuery} from '~/Hooks'
import classnames from 'classnames';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SortTransactions() {
    const [query, setQuery] = useState('Latest');
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

    const handleQuery = (query) => {
        setQuery(query);
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery({});
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);    

    return(
        <div className={chooseQueries('sort')} onClick={handleOpen}>
            Sort by
            <div className={styles.sort_container}>
                {query}
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
                                <li onClick={() => handleQuery('Highest')} style={query === 'highest' ? {fontWeight: 700} : {}}>
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
        </div>
    )
}

export default SortTransactions;