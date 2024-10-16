import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import Header from './Header';
import Pots from './Pots';
import Budgets from './Budgets';
import Transactions from './Transactions';
import RecurringBills from './RecurringBills';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Overview(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

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