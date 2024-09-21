import React, {useState, useEffect} from 'react';
import icons from './icons';
import {useSelector} from 'react-redux';
import classnames from 'classnames';
import {useMediaQuery} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css'

function Transactions() {
    const isMenuMimized = useSelector(state => state.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

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
        <section className={chooseQueries('transactions')}>
            <h1 className={chooseQueries('transactions_title')}>
                Transactions
            </h1>
            <button>
                View All
                <div className={chooseQueries('transactions_arrow')}/>
            </button>
            <ul className={styles.transactions_all}>
                <li className={styles.transaction}> 
                    <img className={styles.transactions_image} src={icons['placeholder']}/>
                    <h2>
                        Bravo Zen Spa
                    </h2>
                    <strong>
                        -$25.00
                    </strong>
                    <time>
                        29 Aug 2024 21:45
                    </time>
                </li>
                <li className={styles.transaction}> 
                    <img className={styles.transactions_image} src={icons['placeholder']}/>
                    <h2>
                        Bravo Zen Spa
                    </h2>
                    <strong>
                        -$25.00
                    </strong>
                    <time>
                        29 Aug 2024 21:45
                    </time>
                </li>
                <li className={styles.transaction}> 
                    <img className={styles.transactions_image} src={icons['placeholder']}/>
                    <h2>
                        Bravo Zen Spa
                    </h2>
                    <strong>
                        -$25.00
                    </strong>
                    <time>
                        29 Aug 2024 21:45
                    </time>
                </li>
                <li className={styles.transaction}> 
                    <img className={styles.transactions_image} src={icons['placeholder']}/>
                    <h2>
                        Bravo Zen Spa
                    </h2>
                    <strong>
                        -$25.00
                    </strong>
                    <time>
                        29 Aug 2024 21:45
                    </time>
                </li>
                <li className={styles.transaction}> 
                    <img className={styles.transactions_image} src={icons['placeholder']}/>
                    <h2>
                        Bravo Zen Spa
                    </h2>
                    <strong>
                        -$25.00
                    </strong>
                    <time>
                        29 Aug 2024 21:45
                    </time>
                </li>
            </ul>
        </section>
    )
}

export default Transactions;