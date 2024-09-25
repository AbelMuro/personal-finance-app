import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';


//now i need to implement the dialog box for the edit budget functionality

function LatestSpending(){
    return(
        <section className={styles.spending}>
            <h2 className={styles.spending_title}>
                Latest Spending
            </h2>
            <button className={styles.spending_button}>
                See All
                <div className={styles.spending_arrow}/>
            </button>
            <div className={styles.spending_transactions}>
                <article className={styles.spending_transaction}>
                    <img className={styles.spending_image} src={icons['placeholder']}/>
                    <h3 className={styles.spending_transactionTitle}>
                        Papa Software
                    </h3>
                    <strong className={styles.spending_total}>
                        -$10.00
                    </strong>
                    <p className={styles.spending_date}>
                        16 Aug 2024 14:00
                    </p>
                </article>
                <article className={styles.spending_transaction}>
                    <img className={styles.spending_image} src={icons['placeholder']}/>
                    <h3 className={styles.spending_transactionTitle}>
                        Papa Software
                    </h3>
                    <strong className={styles.spending_total}>
                        -$10.00
                    </strong>
                    <p className={styles.spending_date}>
                        16 Aug 2024 14:00
                    </p>
                </article>
            </div>
        </section>
    )
}

export default LatestSpending;