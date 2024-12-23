import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';
import {useMenuMinMaxStyles} from '~/Hooks';
import {Budget} from '../DisplayBudget';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function LatestSpending(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const dispatch = useDispatch();
    const {transactions, category} = useContext(Budget);

    const handleSeeAll = () => {
        dispatch({type: 'CHANGE_LINK', payload: 'transactions'});
        dispatch({type: 'UPDATE_CATEGORY', payload: category})
    }

    return(
        <section className={styles.spending}>
            <h2 className={styles.spending_title}>
                Latest Spending
            </h2>
            <button className={styles.spending_button} onClick={handleSeeAll}>
                See All
                <div className={styles.spending_arrow}/>
            </button>
            <div className={styles.spending_transactions}>

                {transactions.length ? transactions.map((transaction, i) => {
                    if(i > 3) return;
                    const transactionId = transaction.transactionId;
                    const image = transaction.image;
                    const recipient = transaction.recipient;
                    const amount = transaction.amount;
                    const date = transaction.date;
                    const plusOrMinus = transaction.plusOrMinus;

                    return(
                        <article className={chooseQueries('spending_transaction')} key={transactionId}>
                            <img className={styles.spending_image} src={image ? image : icons['placeholder']}/>
                            <h3 className={styles.spending_transactionTitle}>
                                {recipient}
                            </h3>
                            <strong className={chooseQueries('spending_total')}>
                                {plusOrMinus}${amount.toFixed(2)}
                            </strong>
                            <p className={chooseQueries('spending_date')}>
                                {date}
                            </p>
                        </article>
                    )
                }) : <div className={styles.no_transactions}>No transactions</div>}
            </div>
        </section>
    )
}

export default LatestSpending;