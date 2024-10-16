import React, {useEffect} from 'react';
import AddTransaction from './AddTransaction';
import DisplayTransactions from './DisplayTransactions';
import {useMenuMinMaxStyles} from '~/Hooks';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function Transactions() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const {state} = useLocation();                                              //this will return a category(string) that was send from the /profile/Budgets component
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!state) return;
        dispatch({type: 'UPDATE_CATEGORY', payload: state});
    }, [state])

    return(
        <section className={chooseQueries('transactions')}>
            <h1>
                Transactions 
            </h1>
            <AddTransaction/>
            <DisplayTransactions/>
        </section>
    )
}

export default Transactions;