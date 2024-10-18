import React from 'react';
import Header from './Header';
import * as styles from './styles.module.css';

function RecurringBills() {
    return(
        <section className={styles.bills}>
            <Header/>
        </section>
    )
}

export default RecurringBills;