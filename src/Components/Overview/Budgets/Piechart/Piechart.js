import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classnames from 'classnames';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Piechart(){
    const isMenuMimized = useSelector(state => state.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized])


    return(
        <>
            <div className={classnames(styles.piechart, mediaQuery.piechart)}>
                <div className={classnames(styles.piechart_whiteCircle, mediaQuery.piechart_whiteCircle)}>
                    <strong>
                        $407
                    </strong>
                    <p>
                        of $975 limit
                    </p>
                </div>
            </div>
            <section className={classnames(styles.piechart_allBudgets, mediaQuery.piechart_allBudgets)}>
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