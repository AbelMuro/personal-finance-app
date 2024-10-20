import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {extractNumbers, isBillDueSoonOrUpcoming} from '~/Common/functions'
import * as styles from './styles.module.css';

function Summary() {
    const bills = useSelector(state => state.bills.bills);
    const currentDate = new Date().getDate();

    const paidBills = useMemo(() => {
        let total = 0;
        let numberOfPaidBills = 0;
        bills.forEach((bill) => {
            let billDate = extractNumbers(bill.dueDate);
            if(isBillDueSoonOrUpcoming(billDate, currentDate) === 'paid'){
                total += bill.amountDue;
                numberOfPaidBills += 1;
            }
        }, 0)
        return [total, numberOfPaidBills];
    }, [bills]);

    const upcomingBills = useMemo(() => {
        let total = 0;
        let numberOfUpcomingBills = 0;
        bills.forEach((bill) => {
            let billDate = extractNumbers(bill.dueDate);
            if(isBillDueSoonOrUpcoming(billDate, currentDate) === 'upcoming'){
                total += bill.amountDue;
                numberOfUpcomingBills += 1;
            }
        }, 0)
        return [total, numberOfUpcomingBills];
    }, [bills])

    const dueSoon = useMemo(() => {
        let total = 0;
        let numberOfBillsDueSoon = 0;
        bills.forEach((bill) => {
            let billDate = extractNumbers(bill.dueDate);
            if(isBillDueSoonOrUpcoming(billDate, currentDate) === 'due soon'){
                total += bill.amountDue;
                numberOfBillsDueSoon += 1;
            }
        }, 0)
        return [total, numberOfBillsDueSoon];
    }, [bills])

    return(
        <section className={styles.summary}>
            <h2 className={styles.summary_title}>
                Summary
            </h2>
            <div className={styles.summary_content}>
                <em className={styles.summary_detail}>
                    Paid Bills
                </em>
                <strong className={styles.summary_data}>
                    {paidBills && paidBills[1]} (${paidBills && paidBills[0]})
                </strong>
                <div className={styles.line}/>
                <em className={styles.summary_detail}>
                    Total Upcoming
                </em>
                <strong className={styles.summary_data}>
                    {upcomingBills && upcomingBills[1]} (${upcomingBills && upcomingBills[0]})
                </strong>
                <div className={styles.line}/>
                <em className={styles.summary_detail}>
                    Due Soon
                </em>
                <strong className={styles.summary_data}>
                    {dueSoon && dueSoon[1]} (${dueSoon && dueSoon[0]})
                </strong>                
            </div>
        </section>
    )
}

export default Summary;