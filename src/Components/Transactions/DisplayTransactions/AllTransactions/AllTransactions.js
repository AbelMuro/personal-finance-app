import React, {useState, useEffect, useMemo} from 'react';
import MobileTransactions from './MobileTransactions';
import icons from './icons';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames'
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function AllTransactions() {
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const transactions = useSelector(state => state.transactions.transactions);
    const page = useSelector(state => state.transactions.page);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');
    const [mobile] = useMediaQuery('(max-width: 620px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    const paginatedTransactions = useMemo(() => {
        const upper = page * 10;
        const lower = upper - 10;
        return transactions.filter((_, i) => {
            const currentTransaction = i + 1;
            return currentTransaction > lower && currentTransaction <= upper;
        })
    }, [page, transactions])

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    return(
        <div className={chooseQueries('transactions')}>
            {!mobile && <div className={chooseQueries('transactions_header')}>
                <p>
                    Recipient/Sender
                </p>    
                <p>
                    Category
                </p>   
                <p>
                    Transactions Date
                </p>   
                <p>
                    Amount
                </p>                 
            </div>}
            {mobile ? <MobileTransactions/> : 
                <section className={styles.transactions_all}>
                     {paginatedTransactions.map((transaction, i) => {

                        const transactionsId = transaction.transactionId;
                        const image = transaction.image;
                        const recipient = transaction.recipient;
                        const category = transaction.category;
                        const date = transaction.date;
                        const amount = transaction.amount;
                        const plusOrMinus = transaction.plusOrMinus;

                        return(
                            <article className={chooseQueries('transaction')} key={transactionsId}>
                                <div>
                                    <img className={styles.transaction_image} src={image ? image : icons['placeholder']}/>
                                    <h1 className={styles.transaction_title}>
                                        {recipient}
                                    </h1>                        
                                </div>
                                <p className={styles.transaction_category}>
                                    {category}
                                </p>
                                <p className={styles.transaction_date}>
                                    {date}
                                </p>
                                <p className={styles.transaction_amount} style={plusOrMinus === '+' ? {color: '#277C78'} : {color: '#201F24'}}>
                                    {plusOrMinus}${amount.toFixed(2)}
                                </p>
                            </article>
                        )
                     })}
            </section>}
        </div>
    )
}

export default AllTransactions;