import React from 'react';
import AddBill from './AddBill';
import * as styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}>
                Recurring Bills
            </h1>
            <AddBill/>
        </header>
    )
}

export default Header;