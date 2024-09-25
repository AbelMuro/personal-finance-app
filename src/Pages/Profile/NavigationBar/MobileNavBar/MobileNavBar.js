import React from 'react';
import {useMediaQuery} from '~/Hooks'; 
import * as styles from './styles.module.css';

function MobileNavBar({link, setLink}){
    const [mobile] = useMediaQuery('(max-width: 620px)');

    const selectedStyles = {
        borderBottom: '4px solid var(--color-green, #277C78)',
        backgroundColor: 'var(--color-beige-100, #F8F4F0)',
        color: 'var(--color-grey-900, #201F24)',
    }

    const selectedIcon = {
        backgroundColor: '#277C78'
    }

    const handleLink = (link) => {
        setLink(link);
    }

    return(
        <nav className={styles.navigation}>
            <ul className={styles.navigation_links}>
                <li className={styles.navigation_link} onClick={() => handleLink('overview')} style={link === 'overview' ? selectedStyles : {}}>
                    <div className={styles.navigation_icon} aria-description='house' style={link === 'overview' ? selectedIcon : {}}/>
                    {!mobile && 'Overview'}
                </li>
                <li className={styles.navigation_link} onClick={() => handleLink('transactions')} style={link === 'transactions' ? selectedStyles : {}}>
                    <div className={styles.navigation_icon} aria-description='transactions' style={link === 'transactions' ? selectedIcon : {}}/>
                    {!mobile && 'Transactions'}
                </li>
                <li className={styles.navigation_link} onClick={() => handleLink('budgets')} style={link === 'budgets' ? selectedStyles : {}}>
                    <div className={styles.navigation_icon} aria-description='circular progress bar' style={link === 'budgets' ? selectedIcon : {}}/>
                    {!mobile && 'Budgets'}
                </li>
                <li className={styles.navigation_link} onClick={() => handleLink('pots')} style={link === 'pots' ? selectedStyles : {}}>
                    <div className={styles.navigation_icon} aria-description='dollar sign' style={link === 'pots' ? selectedIcon : {}}/>
                    {!mobile && 'Pots'}
                </li>
                <li className={styles.navigation_link} onClick={() => handleLink('bills')} style={link === 'bills' ? selectedStyles : {}}>
                    <div className={styles.navigation_icon} aria-description='bill' style={link === 'bills' ? selectedIcon : {}}/>
                    {!mobile && 'Recurring bills'}
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavBar;
