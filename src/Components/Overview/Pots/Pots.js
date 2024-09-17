import React from 'react';
import {useMinimizeStyles} from '~/Hooks'
import * as styles from './styles.module.css';
import icons from './icons';

function Pots(){
    const [resize] = useMinimizeStyles();

    const resizeGridStyles = {
        gridTemplateColumns: '0.95fr 0.5fr 0.5fr'
    }


    return(
        <article className={styles.pots} style={resize ? resizeGridStyles : {}}>
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
                <div className={styles.pots_color} style={{backgroundColor: '#277C78'}}/>
                <h2>
                    Savings
                </h2>
                <strong>
                    $159
                </strong>
            </div>
            <div className={styles.pots_savings}>
                <div className={styles.pots_color} style={{backgroundColor: '#82C9D7'}}/>
                <h2>
                    Gift
                </h2>
                <strong>
                    $40
                </strong>
            </div>
            <div className={styles.pots_savings}> 
                <div className={styles.pots_color} style={{backgroundColor: '#626070'}}/>
                <h2>
                    Concert Ticket
                </h2>
                <strong>
                    $110
                </strong>
            </div>
            <div className={styles.pots_savings}>
                <div className={styles.pots_color} style={{backgroundColor: '#F2CDAC'}}/>
                <h2>
                    New Laptop
                </h2>
                <strong>
                    $159
                </strong>
            </div>
        </article>
    )
}

export default Pots;