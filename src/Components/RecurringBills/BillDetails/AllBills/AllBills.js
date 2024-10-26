import React from 'react';
import SearchBox from './SearchBox';
import SortBills from './SortBills';
import MobileBills from './MobileBills';
import {useSelector} from 'react-redux';
import {extractNumbers, isBillDueSoonOrUpcoming} from '~/Common/functions'
import {useMenuMinMaxStyles, useMediaQuery} from '~/Hooks';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function AllBills(){
    const bills = useSelector(state => state.bills.bills);
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const [mobile] = useMediaQuery('(max-width: 620px)');

    return(
        <section className={chooseQueries('bills')}> 
            <SearchBox/>
            <SortBills/>
            <div className={styles.allBills}>
                {
                    !mobile && 
                    <div className={chooseQueries('allBills_headers')}>
                        <h3>
                            Bill Title
                        </h3>
                        <h3>
                            Due Date
                        </h3>
                        <h3>
                            Amount
                        </h3>
                    </div>                    
                }
                {mobile ? <MobileBills/> : 
                    bills.length !== 0 ? bills.map((bill) => {
                        const image = bill.image;
                        const title = bill.title;
                        const dueDate = bill.dueDate;
                        const amount = bill.amountDue;
                        const currentDate = new Date().getDate();
                        const billDate = extractNumbers(dueDate);
                        const id = bill.id;
                        const billStatus = isBillDueSoonOrUpcoming(billDate, currentDate);

                        return(
                            <div className={chooseQueries('bill')} key={id}>
                                <div className={styles.bill_group}>
                                    <img className={styles.bill_image} src={image ? image : icons['placeholder']}/>
                                    <h2 className={styles.bill_title}>
                                        {title}
                                    </h2>
                                </div>
                                <div className={styles.bill_due} style={billStatus === 'paid' ? {color: '#277C78'} : {}}>
                                    {dueDate}
                                    {billStatus === 'paid' && <img className={styles.bill_icon} src={icons['billPaid']}/>}
                                    {billStatus === 'due soon' && <img className={styles.bill_icon} src={icons['billDue']}/>}
                                </div>
                                <strong className={styles.bill_amount} style={billStatus === 'due soon' ? {color: '#C94736'} : {}}>
                                    ${amount.toFixed(2)}
                                </strong>
                            </div>
                        )
                    }) : <p className={styles.message}> There are no bills to display</p>
                }                
            </div>
        </section>
    )
}

export default AllBills;