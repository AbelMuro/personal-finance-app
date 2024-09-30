import React from 'react';
import * as styles from './styles.module.css';

//this is where i left off, i will need to make this component dynamic based on the props
//and i will need to create a global chart that i can use to map the names of colors with their hexadecimal values

//refactor the progress bar into a div
function ProgressBar({maxSpending, theme}) {
    return(
        <div className={styles.progress}>
            <p className={styles.progress_limit}>
                Maximum of ${maxSpending}
            </p>
            <progress className={styles.progress_bar} value={75} max={100} style={{backgroundColor: theme}}/>
            <div className={styles.progress_spent}>
                <div className={styles.progress_color} style={{backgroundColor: theme}}/>
                <p className={styles.progress_title}>
                    Spent
                </p>
                <strong className={styles.progress_total}>
                    $25.00
                </strong>
            </div>
            <div className={styles.progress_remaining}>
                <div className={styles.progress_color} style={{backgroundColor: theme}}/>
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