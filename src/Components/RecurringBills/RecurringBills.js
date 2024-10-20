import React from 'react';
import Header from './Header';
import BillDetails from './BillDetails';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

//now i need to complete the tablet design for this component
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