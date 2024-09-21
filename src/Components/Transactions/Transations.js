import React from 'react';
import DisplayTransactions from './DisplayTransactions';
import * as styles from './styles.module.css';

function Transactions() {
    return(
        <section className={styles.transactions}>
            <h1>
                Transactions 
            </h1>
            <DisplayTransactions/>
        </section>
    )
}

export default Transactions;