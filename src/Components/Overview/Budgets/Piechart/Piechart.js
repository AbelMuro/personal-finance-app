import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Piechart(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <>
            <div className={chooseQueries('piechart')}>
                <div className={chooseQueries('piechart_whiteCircle')}>
                    <strong>
                        $407
                    </strong>
                    <p>
                        of $975 limit
                    </p>
                </div>
            </div>
            <section className={chooseQueries('piechart_allBudgets')}>
                <div className={styles.piechart_budget}>
                    <div className={styles.piechart_color} style={{backgroundColor: '#277C78'}}/>
                    <h2>
                        Entertainment
                    </h2>
                    <strong>
                        $25.00
                    </strong>
                </div>  
                <div className={styles.piechart_budget}>
                    <div className={styles.piechart_color} style={{backgroundColor: '#82C9D7'}}/>
                    <h2>
                        Bills
                    </h2>
                    <strong>
                        $250.00
                    </strong>
                </div>
                <div className={styles.piechart_budget}>
                    <div className={styles.piechart_color} style={{backgroundColor: '#626070'}}/>
                    <h2>
                        Personal Care
                    </h2>
                    <strong>
                        $65.00
                    </strong>
                </div>
                <div className={styles.piechart_budget}>
                    <div className={styles.piechart_color} style={{backgroundColor: '#F2CDAC'}}/>
                    <h2>
                        Dining Out
                    </h2>
                    <strong>
                        $67.00
                    </strong>
                </div>              
            </section>
        </>
    )
}

export default Piechart