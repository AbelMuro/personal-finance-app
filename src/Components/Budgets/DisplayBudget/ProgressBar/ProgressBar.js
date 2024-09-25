import React from 'react';
import * as styles from './styles.module.css';

function ProgressBar() {
    return(
        <div className={styles.progress}>
            <p className={styles.progress_limit}>
                Maximum of $50.00
            </p>
            <progress className={styles.progress_bar} value={75} max={100}/>
            <div className={styles.progress_spent}>
                <div className={styles.progress_color}/>
                <p className={styles.progress_title}>
                    Spent
                </p>
                <strong className={styles.progress_total}>
                    $25.00
                </strong>
            </div>
            <div className={styles.progress_remaining}>
                <div className={styles.progress_color}/>
                <p className={styles.progress_title}>
                    Free
                </p>
                <strong className={styles.progress_total}>
                    $50.00
                </strong>
            </div>
        </div>
    )
}

export default ProgressBar;