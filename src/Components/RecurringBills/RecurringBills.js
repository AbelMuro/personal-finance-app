import React from 'react';
import Header from './Header';
import BillDetails from './BillDetails';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function RecurringBills() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <section className={chooseQueries('bills')}>
            <Header/>
            <BillDetails/>
        </section>
    )
}

export default RecurringBills;