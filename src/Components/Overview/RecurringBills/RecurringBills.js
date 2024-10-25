import React, {useMemo, forwardRef} from 'react';
import MessageBox from '~/Common/Components/MessageBox';
import {extractNumbers, isBillDueSoonOrUpcoming} from '~/Common/functions';
import {useMenuMinMaxStyles} from '~/Hooks';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css'

function RecurringBills(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const bills = useSelector(state => state.overview.data.bills);
    const dispatch = useDispatch();
    const currentDate = new Date().getDate();

    const handleDetails = () => {
        dispatch({type: 'CHANGE_LINK', payload: 'bills'})
    }

    const paidBills = useMemo(() => {
        let total = 0;
        bills.forEach((bill) => {
            let billDate = extractNumbers(bill.dueDate);
            if(isBillDueSoonOrUpcoming(billDate, currentDate) === 'paid'){
                total += bill.amountDue;
            }
        }, 0)
        return total;
    }, [bills]);

    const upcomingBills = useMemo(() => {
        let total = 0;
        bills.forEach((bill) => {
            let billDate = extractNumbers(bill.dueDate);
            if(isBillDueSoonOrUpcoming(billDate, currentDate) === 'upcoming'){
                total += bill.amountDue;
            }
        }, 0)
        return total;
    }, [bills])

    const dueSoon = useMemo(() => {
        let total = 0;
        bills.forEach((bill) => {
            let billDate = extractNumbers(bill.dueDate);
            if(isBillDueSoonOrUpcoming(billDate, currentDate) === 'due soon'){
                total += bill.amountDue;
            }
        }, 0)
        return total;
    }, [bills])

    return(
        <section className={chooseQueries('bills')}>
            <h1 className={chooseQueries('bills_title')}>
                Recurring bills
            </h1>
            <button onClick={handleDetails}>
                See Details
                <div className={chooseQueries('bills_arrow')}/>
            </button>
            <div className={styles.bills_details}>
                <div className={styles.bills_detail}>
                    <h2>
                        Paid Bills
                    </h2>
                    <MessageBox 
                        total={paidBills}
                        Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                            return(
                                <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                    ${paidBills.toLocaleString('en-US',{
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    {children}
                                </strong>                                
                            )
                        })}/>

                </div>
                <div className={styles.bills_detail}>
                    <h2>
                        Total Upcoming
                    </h2>
                    <MessageBox 
                        total={upcomingBills}
                        Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                            return(
                                <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                    ${upcomingBills.toLocaleString('en-US',{
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    {children}
                                </strong>                                
                            )
                        })}/>
                </div>
                <div className={styles.bills_detail}>
                    <h2>
                        Due Soon
                    </h2>
                    <MessageBox 
                        total={dueSoon}
                        Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                            return(
                                <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                    ${dueSoon.toLocaleString('en-US',{
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    {children}
                                </strong>                                
                            )
                        })}/>
                </div>
            </div>

        </section>
    )
}

export default RecurringBills;