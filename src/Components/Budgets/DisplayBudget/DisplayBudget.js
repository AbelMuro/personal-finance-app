import React from 'react';
import icons from './icons';
import ProgressBar from './ProgressBar';
import LatestSpending from './LatestSpending';
import * as styles from './styles.module.css';

function DisplayBudget() {
    return(
        <section className={styles.budget}>
            <div className={styles.budget_header}>
                <div className={styles.budget_color}/>
                <h2 className={styles.budget_title}>
                    Entertainment
                </h2>
                <img className={styles.budget_edit} src={icons['threeDots']}/>
            </div>
            <ProgressBar/>
            <LatestSpending/>
        </section>
    )
}

export default DisplayBudget;