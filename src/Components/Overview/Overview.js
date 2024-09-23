import React, {useEffect, useState} from 'react';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import Header from './Header';
import Pots from './Pots';
import Budgets from './Budgets';
import Transactions from './Transactions';
import RecurringBills from './RecurringBills';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Overview(){
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
        <section className={chooseQueries('overview')}>
            <Header/>
            <div className={chooseQueries('overview_misc')}>
                <div className={chooseQueries('overview_columnOne')}>
                    <Pots/>
                    <Transactions/>
                </div>
                <div className={chooseQueries('overview_columnTwo')}>
                    <Budgets/>
                    <RecurringBills/>
                </div>
            </div>
        </section>
    )
}

export default Overview;