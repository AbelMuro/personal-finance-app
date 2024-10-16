import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import icons from './icons';

function Pots(){    
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <article className={chooseQueries('pots')}>
            <h1 className={chooseQueries('pots_title')}>
                Pots
            </h1>
            <button className={chooseQueries('pots_button')}>
                See Details
                <div className={chooseQueries('pots_arrow')}/>
            </button>
            <div className={chooseQueries('pots_total')}>
                <img className={styles.pots_icon} src={icons['dollarSign']}/>
                <h2>
                    Total Saved
                </h2>
                <strong>
                    $850
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}>
                <div className={styles.pots_color} style={{backgroundColor: '#277C78'}}/>
                <h2>
                    Savings
                </h2>
                <strong>
                    $159
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}>
                <div className={styles.pots_color} style={{backgroundColor: '#82C9D7'}}/>
                <h2>
                    Gift
                </h2>
                <strong>
                    $40
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}> 
                <div className={styles.pots_color} style={{backgroundColor: '#626070'}}/>
                <h2>
                    Concert Ticket
                </h2>
                <strong>
                    $110
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}>
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