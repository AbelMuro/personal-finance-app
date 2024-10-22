import React, {useMemo} from 'react';
import icons from './icons';
import {useSelector, useDispatch} from 'react-redux';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Transactions() {
    const dispatch = useDispatch();
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const budgets = useSelector(state => state.overview.data.budgets);

    const handleViewAll = () => {
        dispatch({
            type: 'CHANGE_LINK',
            payload: 'transactions'
        })
    }

    const transactions = useMemo(() => {
        const transactions = [];
        budgets.forEach((budget) => {
            transactions.push(...budget.transactions);
        });

        transactions.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if(dateA < dateB)
                return 1;
            else if(dateA > dateB)
                return -1;
            else 
                return 1;
        })
        return transactions.slice(0, 5);
    }, [budgets])

    return(
        <section className={chooseQueries('transactions')}>
            <h1 className={chooseQueries('transactions_title')}>
                Transactions
            </h1>
            <button onClick={handleViewAll}>
                View All
                <div className={chooseQueries('transactions_arrow')}/>
            </button>
            <ul className={styles.transactions_all}>
                {
                    transactions.length !== 0 ? transactions.map((transaction) => {
                        const recipient = transaction.recipient;
                        const image = transaction.image;
                        const plusOrMinus = transaction.plusOrMinus;
                        const amount = transaction.amount;
                        const date = transaction.date;

                        return(
                            <li className={styles.transaction}> 
                                <img className={styles.transactions_image} src={image ? image : icons['placeholder']}/>
                                <h2>
                                    {recipient}
                                </h2>
                                <strong style={plusOrMinus === '+' ? {color: '#277C78'} : {color: '#201F24'}}>
                                    {plusOrMinus}${amount.toLocaleString('en-US',{
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </strong>
                                <time>
                                    {date}
                                </time>
                            </li>
                        )
                    })  : <div className={styles.empty}> No Transactions</div>
                }
            </ul>
        </section>
    )
}

export default Transactions;