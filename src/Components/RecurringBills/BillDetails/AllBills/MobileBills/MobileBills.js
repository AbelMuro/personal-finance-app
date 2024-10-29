import React from 'react';
import {useSelector} from 'react-redux';
import {extractNumbers, isBillDueSoonOrUpcoming} from '~/Common/functions'
import * as styles from './styles.module.css';
import icons from '../icons';

function MobileBills() {
    const bills = useSelector(state => state.bills.bills);

    return (
        <section className={styles.bills}>
            {bills.length !== 0 ? 
                bills.map((bill) => {
                    const id = bill.id
                    const image = bill.image;
                    const title = bill.title;
                    const dueDate = bill.dueDate;
                    const amount = bill.amountDue;
                    const billDate = extractNumbers(dueDate);
                    const currentDate = new Date().getDate();
                    const billStatus = isBillDueSoonOrUpcoming(billDate, currentDate);

                    return(
                        <div className={styles.bill} key={id}>
                            <img className={styles.bill_image} src={image ? image : icons['placeholder']}/>
                            <h2 className={styles.bill_title}> 
                                {title}
                            </h2>
                            <div className={styles.bill_group} style={billStatus === 'paid' ? {color: '#277C78'} : {}}>
                                {dueDate}
                                {billStatus === 'paid' && <img className={styles.bill_icon} src={icons['billPaid']}/>}
                                {billStatus === 'due soon' && <img className={styles.bill_icon} src={icons['billDue']}/>}
                            </div>
                            <strong className={styles.bill_amount} style={billStatus === 'due soon' ? {color: '#C94736'} : {}}>
                                ${amount}
                            </strong>
                        </div>            
                    )
                }) : <p className={styles.message}>No Bills</p>        
            }
        </section> 
    )
}

export default MobileBills;