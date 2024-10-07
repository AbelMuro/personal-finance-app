import React, {useState, useEffect, useContext} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import {Budget} from '../DisplayBudget';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function LatestSpending(){
    const navigate = useNavigate();
    const {transactions, category} = useContext(Budget);
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const handleSeeAll = () => {
        navigate('/profile/transactions', {state: category})
    }

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