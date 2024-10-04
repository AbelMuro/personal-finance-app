import React, {useState, useEffect, useContext} from 'react';
import {Budget} from '`/DisplayBudget';
import * as styles from './styles.module.css';
import themes from '~/Themes';

function ProgressBar() {
    const {limit, theme, totalSpent} = useContext(Budget);
    const [percent, setPercent] = useState('0%');

    useEffect(() => {
        const percent = totalSpent / limit * 100;
        setPercent(percent);
    }, [limit, totalSpent])

    return(
        <div className={styles.progress}>
            <p className={styles.progress_limit}>
                Maximum of ${limit.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
            </p>
            <div className={styles.progress_container}>
                <div className={styles.progress_bar} aria-description='progress bar' style={{width: percent, backgroundColor: themes[theme]}}/>
            </div>
            <div className={styles.progress_spent}>
                <div className={styles.progress_color} style={{backgroundColor: themes[theme]}}/>
                <p className={styles.progress_title}>
                    Spent
                </p>
                <strong className={styles.progress_total}>
                    ${totalSpent.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </strong>
            </div>
            <div className={styles.progress_remaining}>
                <div className={styles.progress_color}/>
                <p className={styles.progress_title}>
                    Remaining
                </p>
                <strong className={styles.progress_total}>
                    ${limit.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </strong>
            </div>
        </div>
    )
}

export default ProgressBar;