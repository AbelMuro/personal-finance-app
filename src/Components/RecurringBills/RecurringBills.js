import React from 'react';
import Header from './Header';
import DisplayBills from './DisplayBills';
import * as styles from './styles.module.css';

function RecurringBills() {
    return(
        <section className={styles.bills}>
            <Header/>
            <DisplayBills/>
        </section>
    )
}

export default RecurringBills;