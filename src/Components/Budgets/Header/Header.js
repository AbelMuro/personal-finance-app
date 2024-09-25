import React from 'react';
import AddNewBudget from './AddNewBudget';
import * as styles from './styles.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}>
                Budget
            </h1>
            <AddNewBudget/>
        </header>
    )
}

export default Header;