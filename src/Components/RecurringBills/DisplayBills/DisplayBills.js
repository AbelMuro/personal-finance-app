import React from 'react';
import TotalBills from './TotalBills';
import * as styles from './styles.module.css';

function DisplayBills() {
    return(
        <section className={styles.container}>
            <TotalBills/>
        </section>
    )
}

export default DisplayBills;