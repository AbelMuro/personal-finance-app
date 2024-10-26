import React, {useMemo, forwardRef} from 'react';
import MessageBox from '~/Common/Components/MessageBox';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import icons from './icons';

function MobileTransactions() {
    const transactions = useSelector(state => state.transactions.transactions);
    const currentPage = useSelector(state => state.transactions.page);

    const paginatedTransactions = useMemo(() => {
        const upper = currentPage * 10;
        const lower = upper - 10;
        return transactions.filter((_, i) => {
            const currentTransaction = i + 1;
            return currentTransaction > lower && currentTransaction <= upper;
        })
    }, [currentPage, transactions])

    return(
        <div className={styles.container}>
            {paginatedTransactions.length !== 0 ? 
                paginatedTransactions.map((transaction) => {
                    const transactionId = transaction.transactionId;
                    const image = transaction.image;
                    const recipient = transaction.recipient;
                    const category = transaction.category;
                    const amount = transaction.amount;
                    const date = transaction.date;
                    const plusOrMinus = transaction.plusOrMinus;

                    return(
                        <section className={styles.transactions} key={transactionId}>
                            <img className={styles.transactions_image} src={image ? image : icons['placeholder']}/>
                            <MessageBox 
                                total={recipient} 
                                Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                                    return(
                                        <h2 
                                            className={styles.transactions_title}
                                            onMouseEnter={onMouseEnter}
                                            onMouseLeave={onMouseLeave}
                                            ref={ref}>
                                                {recipient}
                                                {children}
                                        </h2>
                                    )
                            })}/>
                            <p className={styles.transactions_category}>
                                {category}
                            </p>
                            <strong className={styles.transactions_price} style={plusOrMinus === '+' ? {color: '#277C78'} : {color: '#201F24'}}>
                                {plusOrMinus}${amount}
                            </strong>
                            <p className={styles.transactions_date}>
                                {date}
                            </p>
                        </section>    
                    )
                }) : <p className={styles.message}>No Transactions</p>
            }     
        </div>
    )
}

export default MobileTransactions;