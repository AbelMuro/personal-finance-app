import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function MobileTransactions() {
    return(
        <div className={styles.container}>
            <section className={styles.transactions}>
                <img className={styles.transactions_image} src={icons['placeholder']}/>
                <h2 className={styles.transactions_title}>
                    Bravo Zen Spa
                </h2>
                <p className={styles.transactions_category}>
                    Personal Care
                </p>
                <strong className={styles.transactions_price}>
                    -$25.00
                </strong>
                <p className={styles.transactions_date}>
                    29 Aug 2024
                </p>
            </section>        
            <section className={styles.transactions}>
                <img className={styles.transactions_image} src={icons['placeholder']}/>
                <h2 className={styles.transactions_title}>
                    Bravo Zen Spa
                </h2>
                <p className={styles.transactions_category}>
                    Personal Care
                </p>
                <strong className={styles.transactions_price}>
                    -$25.00
                </strong>
                <p className={styles.transactions_date}>
                    29 Aug 2024
                </p>
            </section>  
            <section className={styles.transactions}>
                <img className={styles.transactions_image} src={icons['placeholder']}/>
                <h2 className={styles.transactions_title}>
                    Bravo Zen Spa
                </h2>
                <p className={styles.transactions_category}>
                    Personal Care
                </p>
                <strong className={styles.transactions_price}>
                    -$25.00
                </strong>
                <p className={styles.transactions_date}>
                    29 Aug 2024
                </p>
            </section>  
            <section className={styles.transactions}>
                <img className={styles.transactions_image} src={icons['placeholder']}/>
                <h2 className={styles.transactions_title}>
                    Bravo Zen Spa
                </h2>
                <p className={styles.transactions_category}>
                    Personal Care
                </p>
                <strong className={styles.transactions_price}>
                    -$25.00
                </strong>
                <p className={styles.transactions_date}>
                    29 Aug 2024
                </p>
            </section>  
            <section className={styles.transactions}>
                <img className={styles.transactions_image} src={icons['placeholder']}/>
                <h2 className={styles.transactions_title}>
                    Bravo Zen Spa
                </h2>
                <p className={styles.transactions_category}>
                    Personal Care
                </p>
                <strong className={styles.transactions_price}>
                    -$25.00
                </strong>
                <p className={styles.transactions_date}>
                    29 Aug 2024
                </p>
            </section>      
        </div>

    )
}

export default MobileTransactions;