import React from 'react';
import Piechart from './Piechart';
import * as styles from './styles.module.css';

// this is where i left off, i should work on the responsiveness before implementing the functionality of the piechart
function Budgets(){


    return(
        <section className={styles.budgets}>
            <h1 className={styles.budgets_title}>
                My Budgets
            </h1>
            <button className={styles.budgets_button}>
                See Details
                <div className={styles.budgets_arrow}/>
            </button>
            <Piechart/>
        </section>
    )
}

export default Budgets;