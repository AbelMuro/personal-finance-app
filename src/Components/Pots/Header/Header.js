import React from 'react';
import AddPot from './AddPot';
import * as styles from './styles.module.css';


function Header() {
    return(
        <header className={styles.header}>
            <h1>
                Pots
            </h1>
            <AddPot/>
        </header>
    )
}

export default Header;