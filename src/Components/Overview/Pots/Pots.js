import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function Pots(){
    return(
        <article className={styles.pots}>
            <h1 className={styles.pots_title}>
                Saving Pots
            </h1>
            <button className={styles.pots_button}>
                See Details
                <div className={styles.pots_arrow}/>
            </button>
            <div className={styles.pots_total}>
                <img className={styles.pots_icon} src={icons['dollarSign']}/>
                <h2>
                    Total Saved
                </h2>
                <strong>
                    $850
                </strong>
            </div>
            <div className={styles.pots_savings}>
                <div className={styles.pots_color}/>
                <h2>
                    Savings
                </h2>
                <strong>
                    $159
                </strong>
            </div>
            <div className={styles.pots_savings}>
                <div className={styles.pots_color}/>
                <h2>
                    Savings
                </h2>
                <strong>
                    $159
                </strong>
            </div>
            <div className={styles.pots_savings}>
                <div className={styles.pots_color}/>
                <h2>
                    Savings
                </h2>
                <strong>
                    $159
                </strong>
            </div>
            <div className={styles.pots_savings}>
                <div className={styles.pots_color}/>
                <h2>
                    Saving
                </h2>
                <strong>
                    $159
                </strong>
            </div>
        </article>
    )
}

export default Pots;