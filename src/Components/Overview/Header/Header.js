import React, {useMemo, forwardRef} from 'react';
import MessageBox from '~/Common/Components/MessageBox';
import UpdateIncome from './UpdateIncome';
import DisplayIncome from './DisplayIncome';
import {useMenuMinMaxStyles} from '~/Hooks';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Header(){
    const budgets = useSelector(state => state.overview.data.budgets);
    const bills = useSelector(state => state.overview.data.bills);
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    const balance = useMemo(() => {
        let total = 0;
        budgets.forEach((budget) => {
            const amount = budget.totalSpent;
            total += amount;
        });
        return total;
    }, [budgets])

    const expenses = useMemo(() => {
        let total = 0;
        bills.forEach((bill) => {
            const amountDue = bill.amountDue;
            total += amountDue;
        });
        return total;
    }, [bills])
 
    return(
        <header className={chooseQueries('header')}>
            <h1 className={chooseQueries('header_title')}>
                Overview
            </h1>   
            <UpdateIncome/>
            <div className={chooseQueries('header_balance')}>
                <h2>
                    Current Balance
                </h2>
                <MessageBox 
                    total={balance} 
                    Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                        return(
                            <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                ${balance.toLocaleString('en-US',{
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                                {children}
                            </strong>
                        )
                })}/>
            </div>  
            <DisplayIncome className={chooseQueries('header_detail')}/>
            <div className={chooseQueries('header_detail')}>
                <h2>
                    Expenses  
                </h2>
                <MessageBox 
                    total={expenses} 
                    Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                        return(
                            <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                ${expenses.toLocaleString('en-US',{
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                                {children}
                            </strong>
                        )
                })}/>
            </div>   
        </header>
    )
}

export default Header;