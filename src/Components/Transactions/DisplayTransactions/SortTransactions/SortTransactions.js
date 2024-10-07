import React, {useState, useEffect, memo} from 'react';
import {useDispatch} from 'react-redux'
import MobileSort from './MobileSort';
import { dropdownVariant } from './Variants';
import {motion, AnimatePresence} from 'framer-motion'
import {useSelector} from 'react-redux';
import {useMediaQuery} from '~/Hooks'
import classnames from 'classnames';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SortTransactions() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.transactions.sort)
    const [open, setOpen] = useState(false);
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');
    const [mobile] = useMediaQuery('(max-width: 620px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSort = (query) => {
        dispatch({type: 'UPDATE_SORT', payload: query});
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery({});
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);    


    return mobile ? <MobileSort/> : 
        <div className={chooseQueries('sort')} onClick={handleOpen}>
            Sort by
            <div className={styles.sort_container}>
                {sort}
                <img className={styles.sort_arrow} src={icons['arrow']} style={open ? {transform: 'rotate(180deg)'} : {}}/>
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

export default memo(SortTransactions);