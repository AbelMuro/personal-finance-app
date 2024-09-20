import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import classnames from 'classnames';
import {useMediaQuery} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css'

function RecurringBills(){
    const isMenuMimized = useSelector(state => state.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }


    return(
        <section className={chooseQueries('bills')}>
            <h1 className={chooseQueries('bills_title')}>
                Recurring bills
            </h1>
            <button>
                See Details
                <div className={chooseQueries('bills_arrow')}/>
            </button>
            <div className={styles.bills_details}>
                <div className={styles.bills_detail}>
                    <h2>
                        Total recurring bills
                    </h2>
                    <strong>
                        $1,550.00
                    </strong>
                </div>
                <div className={styles.bills_detail}>
                    <h2>
                        Remaining this month
                    </h2>
                    <strong>
                        $1,230.00
                    </strong>
                </div>
                <div className={styles.bills_detail}>
                    <h2>
                        Total bills due soon
                    </h2>
                    <strong>
                        $40.00
                    </strong>
                </div>
            </div>

        </section>
    )
}

export default RecurringBills;