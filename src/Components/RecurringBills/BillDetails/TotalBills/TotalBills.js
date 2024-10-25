import React, {useMemo, forwardRef} from 'react';
import MessageBox from '~/Common/Components/MessageBox';
import {useMenuMinMaxStyles} from '~/Hooks';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import icons from './icons';

function TotalBills() {
    const [chooseQueries] = useMenuMinMaxStyles({}, mediaQueryMax, styles)
    const bills = useSelector(state => state.bills.bills);

    const total = useMemo(() => {
          return bills.reduce((acc, bill) => {
                return acc + bill.amountDue;
            }, 0)
    }, [bills])


    return(
        <div className={chooseQueries('bills')}>
            <img className={styles.bills_icon} src={icons['bill']}/>
            <div className={styles.bills_desc}>
                <h2 className={styles.bills_title}>
                    Total Bills
                </h2>
                <MessageBox 
                    total={total}
                    Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                        return(
                            <strong 
                                className={styles.bills_total}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                ref={ref}
                                >
                                    ${total.toLocaleString('en-us', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    {children}
                            </strong>                             
                        )
                    })}/>
            </div>
        </div>
    )
}

export default TotalBills;