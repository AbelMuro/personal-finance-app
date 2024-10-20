import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import icons from './icons';

function TotalBills() {
    const [chooseQueries] = useMenuMinMaxStyles({}, mediaQueryMax, styles)
    const bills = useSelector(state => state.bills.bills);

    return(
        <div className={chooseQueries('bills')}>
            <img className={styles.bills_icon} src={icons['bill']}/>
            <div className={styles.bills_desc}>
                <h2 className={styles.bills_title}>
                    Total Bills
                </h2>
                <strong className={styles.bills_total}>
                    ${bills.reduce((acc, bill) => {
                        return acc + bill.amountDue;
                    }, 0)}
                </strong>                
            </div>

        </div>
    )
}

export default TotalBills;