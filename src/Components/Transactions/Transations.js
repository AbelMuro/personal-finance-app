import React, {useState, useEffect} from 'react';
import AddTransaction from './AddTransaction';
import DisplayTransactions from './DisplayTransactions';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames'
import {useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function Transactions() {
    const {state} = useLocation();                                              //this will return a category(string) that was send from the /profile/Budgets component
    const dispatch = useDispatch();
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className]);
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);
    
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