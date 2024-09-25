import React, {useState, useEffect} from 'react';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SpendingSummary() {
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    return(
        <section className={chooseQueries('spending')}>
            <div className={chooseQueries('spending_piechart')}>
                <div className={chooseQueries('spending_whiteCircle')}>
                    <strong className={chooseQueries('spending_piechartTitle')}>
                        $407
                    </strong>
                    <p className={chooseQueries('spending_piechartLimit')}>
                        of $975 limit
                    </p>
                </div>
            </div>
            <ul className={styles.spending_summary}>
                <li className={chooseQueries('spending_title')}>
                    Spending Summary
                </li>
                <li className={chooseQueries('spending_detail')}>
                    <div className={styles.color}/>
                    <p className={styles.spending_category}>
                        Entertainment
                    </p>
                    <div className={chooseQueries('spending_flex')}>
                        <strong className={styles.spending_total}>
                            $155.00
                        </strong>
                        <p className={styles.spending_limit}>
                            of $500.00
                        </p>                        
                    </div>
                </li>
                <li className={chooseQueries('spending_detail')}>
                    <div className={styles.color}/>
                    <p className={styles.spending_category}>
                        Entertainment
                    </p>
                    <div className={chooseQueries('spending_flex')}>
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