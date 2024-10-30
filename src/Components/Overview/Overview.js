import React, {useState, useEffect} from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import Header from './Header';
import Pots from './Pots';
import Budgets from './Budgets';
import Transactions from './Transactions';
import RecurringBills from './RecurringBills';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Overview(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const getAllData = async () => {
        setLoading(true);
        const response = await fetch('https://finance-app-server-5991576c358c.herokuapp.com/get_allData', {
            method: 'GET',
            credentials: 'include'
        })

        if(response.status === 200){
            const result = await response.json();
            dispatch({type: 'UPDATE_DATA', payload: result});
        }
        else if(response.status === 401){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }
        else{
            const message = await response.text();
            console.log(message);         
            setTimeout(() => {
                alert('Internal server error occured, please try again later')
            }, 500);
        }
        setLoading && setLoading(false);
    }

    useEffect(() => {
        getAllData();
    }, [])

    return(
        <section className={chooseQueries('overview')}>
            {loading ? 
                <div className={styles.loading_header}>
                    <Skeleton width='100%' height='119px' borderRadius={8}/>
                    <Skeleton width='100%' height='119px' borderRadius={8}/>
                    <Skeleton width='100%' height='119px' borderRadius={8}/>
                </div> 
                : <Header/>}
            <div className={chooseQueries('overview_misc')}>
                <div className={chooseQueries('overview_columnOne')}>
                    {loading ? <Skeleton width='100%' height='218px' borderRadius={8}/> : <Pots/>}
                    {loading ? <Skeleton width='100%' height='519px' borderRadius={8}/> : <Transactions/>}
                </div>
                <div className={chooseQueries('overview_columnTwo')}>
                    {loading ? <Skeleton width='100%' height='410px' borderRadius={8}/> : <Budgets/>}
                    {loading ? <Skeleton width='100%' height='327px' borderRadius={8}/> : <RecurringBills/>}
                </div>
            </div>
        </section>
    )
}

export default Overview;