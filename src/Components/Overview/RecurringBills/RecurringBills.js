import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css'

function RecurringBills(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <section className={chooseQueries('bills')}>
            <h1 className={chooseQueries('bills_title')}>
                Recurring bills
            </h1>
            <button>
                See Details
                <div className={chooseQueries('bills_arrow')}/>
            </button>
            <div className={styles.bills_details}>
                <div className={styles.bills_detail}>
                    <h2>
                        Paid Bills
                    </h2>
                    <strong>
                        $1,550.00
                    </strong>
                </div>
                <div className={styles.bills_detail}>
                    <h2>
                        Total Upcoming
                    </h2>
                    <strong>
                        $1,230.00
                    </strong>
                </div>
                <div className={styles.bills_detail}>
                    <h2>
                        Due Soon
                    </h2>
                    <strong>
                        $40.00
                    </strong>
                </div>
            </div>

        </section>
    )
}

export default RecurringBills;