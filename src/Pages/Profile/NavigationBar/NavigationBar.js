import React, {useState, useEffect} from 'react';
import MobileNavBar from './MobileNavBar';
import { useMediaQuery } from '~/Hooks';
import * as styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {menuVariants} from './Variants';
import {useDispatch, useSelector} from 'react-redux';
import icons from './icons';

function NavigationBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [link, setLink] = useState('overview');
    const [tablet] = useMediaQuery('(max-width: 850px)');
    const minimize = useSelector(state => state.menu.minimize);

    const selectedStyles = {
        borderLeft: '4px solid var(--color-green, #277C78)',
        backgroundColor: 'var(--color-beige-100, #F8F4F0)',
        color: 'var(--color-grey-900, #201F24)',
    }

    const selectedIcon = {
        backgroundColor: '#277C78'
    }

    const minimizedLogoStyles = {
        maskImage: `url(${icons['logoSmall']})`,
        maskSize: '14px 22px',
        width: '14px',
        height: '22px',
        marginLeft: '38px'
    }

    const minimizedArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleLink = (link) => {
        setLink(link);
    }

    const handleMinimize = () => {
        dispatch({type: 'CHANGE_MENU', payload: !minimize})
    }

    useEffect(() => {
        navigate(`/profile/${link}`);
    }, [link]);

    return tablet ? <MobileNavBar link={link} setLink={setLink}/> : 
            <motion.nav 
                className={styles.navigation} 
                initial={false}
                animate={minimize ? 'minimize' : 'maximize'}
                variants={menuVariants}
                >
                <section>
                    <div className={styles.navigation_logo} aria-description='application logo for finance' style={minimize ? minimizedLogoStyles : {}}/>
                    <ul className={styles.navigation_links}>
                        <li className={styles.navigation_link} onClick={() => handleLink('overview')} style={link === 'overview' ? selectedStyles : {}}>
                            <div className={styles.navigation_icon} aria-description='house' style={link === 'overview' ? selectedIcon : {}}/>
                            {!minimize && 'Overview'}
                        </li>
                        <li className={styles.navigation_link} onClick={() => handleLink('transactions')} style={link === 'transactions' ? selectedStyles : {}}>
                            <div className={styles.navigation_icon} aria-description='arrows' style={link === 'transactions' ? selectedIcon : {}}/>
                            {!minimize && 'Transactions'}
                        </li>
                        <li className={styles.navigation_link} onClick={() => handleLink('budgets')} style={link === 'budgets' ? selectedStyles : {}}>
                            <div className={styles.navigation_icon} aria-description='circular progress bar' style={link === 'budgets' ? selectedIcon : {}}/>
                            {!minimize && 'Budgets'}
                        </li>
                        <li className={styles.navigation_link} onClick={() => handleLink('pots')} style={link === 'pots' ? selectedStyles : {}}>
                            <div className={styles.navigation_icon} aria-description='dollar sign' style={link === 'pots' ? selectedIcon : {}}/>
                            {!minimize && 'Pots'}
                        </li>
                        <li className={styles.navigation_link} onClick={() => handleLink('bills')} style={link === 'bills' ? selectedStyles : {}}>
                            <div className={styles.navigation_icon} aria-description='bills' style={link === 'bills' ? selectedIcon : {}}/>
                            {!minimize && 'Recurring Bills'}
                        </li>
                    </ul>                
                </section>
                <button className={styles.navigation_open} onClick={handleMinimize}>
                    <div className={styles.navigation_arrow} style={minimize ? minimizedArrowStyles : {}}/>
                    {!minimize && 'Minimize Menu'}
                </button>
            </motion.nav>
}

export default NavigationBar;