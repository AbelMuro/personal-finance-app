import React from 'react';
import AddTransaction from './AddTransaction';
import DisplayTransactions from './DisplayTransactions';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function Transactions() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    

    return(
        <section className={chooseQueries('transactions')}>
            <h1>
                Transactions 
            </h1>
            <AddTransaction/>
            <DisplayTransactions/>
        </section>
    )
}

export default Transactions;