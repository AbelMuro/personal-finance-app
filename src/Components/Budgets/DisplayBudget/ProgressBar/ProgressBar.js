import React, {useContext} from 'react';
import {Budget} from '`/DisplayBudget';
import * as styles from './styles.module.css';
import themes from '~/Themes';

//i will need to find the percentage of totalSpent from limit
function ProgressBar() {
    const {limit, theme, totalSpent} = useContext(Budget);

    return(
        <div className={styles.progress}>
            <p className={styles.progress_limit}>
                Maximum of ${limit}
            </p>
            <div className={styles.progress_container}>
                <div className={styles.progress_bar} aria-description='progress bar' style={{width: '75%', backgroundColor: themes[theme]}}/>
            </div>
            <div className={styles.progress_spent}>
                <div className={styles.progress_color} style={{backgroundColor: themes[theme]}}/>
                <p className={styles.progress_title}>
                    Spent
                </p>
                <strong className={styles.progress_total}>
                    $0.00
                </strong>
            </div>
            <div className={styles.progress_remaining}>
                <div className={styles.progress_color}/>
                <p className={styles.progress_title}>
                    Remaining
                </p>
                <strong className={styles.progress_total}>
                    ${Number(limit).toFixed(2)}
                </strong>
            </div>
        </div>
    )
}

export default ProgressBar;