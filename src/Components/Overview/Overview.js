import React from 'react';
import Header from './Header';
import Pots from './Pots';
import Budgets from './Budgets';
import * as styles from './styles.module.css';

function Overview(){
    return(
        <section className={styles.overview}>
            <Header/>
            <div className={styles.overview_misc}>
                <Pots/>
                <Budgets/>
            </div>
        </section>
    )
}

export default Overview;