import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function LatestSpending(){
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
        <section className={styles.spending}>
            <h2 className={styles.spending_title}>
                Latest Spending
            </h2>
            <button className={styles.spending_button}>
                See All
                <div className={styles.spending_arrow}/>
            </button>
            <div className={styles.spending_transactions}>
                <article className={chooseQueries('spending_transaction')}>
                    <img className={styles.spending_image} src={icons['placeholder']}/>
                    <h3 className={styles.spending_transactionTitle}>
                        Papa Software
                    </h3>
                    <strong className={chooseQueries('spending_total')}>
                        -$10.00
                    </strong>
                    <p className={chooseQueries('spending_date')}>
                        16 Aug 2024 14:00
                    </p>
                </article>
                <article className={chooseQueries('spending_transaction')}>
                    <img className={styles.spending_image} src={icons['placeholder']}/>
                    <h3 className={styles.spending_transactionTitle}>
                        Papa Software
                    </h3>
                    <strong className={chooseQueries('spending_total')}>
                        -$10.00
                    </strong>
                    <p className={chooseQueries('spending_date')}>
                        16 Aug 2024 14:00
                    </p>
                </article>
            </div>
        </section>
    )
}

export default LatestSpending;