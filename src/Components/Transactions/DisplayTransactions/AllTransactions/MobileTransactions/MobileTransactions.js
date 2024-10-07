import React from 'react';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import icons from './icons';

function MobileTransactions() {
    const transactions = useSelector(state => state.transactions.transactions);

    return(
        <div className={styles.container}>
            {
                transactions.map((transaction) => {
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
                            <h2 className={styles.transactions_title}>
                                {recipient}
                            </h2>
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
                })
            }     
        </div>
    )
}

export default MobileTransactions;