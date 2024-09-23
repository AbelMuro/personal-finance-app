import React from 'react';
import * as styles from './styles.module.css';

function SpendingSummary() {
    return(
        <section className={styles.spending}>
            <div className={styles.spending_piechart}>
                <div className={styles.spending_whiteCircle}>
                    <strong>
                        $407
                    </strong>
                    <p>
                        of $975 limit
                    </p>
                </div>
            </div>
            <ul className={styles.spending_summary}>
                <li className={styles.spending_title}>
                    Spending Summary
                </li>
                <li className={styles.spending_detail}>
                    <div className={styles.color}/>
                    <p className={styles.spending_category}>
                        Entertainment
                    </p>
                    <div>
                        <strong className={styles.spending_total}>
                            $15.00
                        </strong>
                        <p className={styles.spending_limit}>
                            of $50.00
                        </p>                        
                    </div>
                </li>
                <li className={styles.spending_detail}>
                    <div className={styles.color}/>
                    <p className={styles.spending_category}>
                        Entertainment
                    </p>
                    <div>
                        <strong className={styles.spending_total}>
                            $15.00
                        </strong>
                        <p className={styles.spending_limit}>
                            of $50.00
                        </p>                        
                    </div>
                </li>
            </ul>
        </section>
    )
} 

export default SpendingSummary;