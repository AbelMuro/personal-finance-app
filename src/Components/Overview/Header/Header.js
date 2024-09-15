import React from 'react';
import * as styles from './styles.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}>
                Overview
            </h1>   
            <div className={styles.header_balance}>
                <h2>
                    Current Balance
                </h2>
                $4,836.00
            </div>  
            <div className={styles.header_detail}>
                <h2>
                    Income
                </h2>
                $3,814.25
            </div> 
            <div className={styles.header_detail}>
                <h2>
                    Expenses  
                </h2>
                $1,700.50
            </div>    
        </header>
    )
}

export default Header;