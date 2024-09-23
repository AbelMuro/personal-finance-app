import React, {useState, useEffect} from 'react';
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
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');
    const [mobile] = useMediaQuery('(max-width: 620px)');

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
                     <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
                    <article className={chooseQueries('transaction')}>
                        <div>
                            <img className={styles.transaction_image} src={icons['placeholder']}/>
                            <h1 className={styles.transaction_title}>
                                Emma Richardson
                            </h1>                        
                        </div>
                        <p className={styles.transaction_category}>
                            General
                        </p>
                        <p className={styles.transaction_date}>
                            19 Aug 2024
                        </p>
                        <p className={styles.transaction_amount}>
                            +75.50
                        </p>
                    </article>
            </section> }
        </div>
    )
}

export default AllTransactions;