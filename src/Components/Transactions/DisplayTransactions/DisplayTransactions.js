import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import SortTransactions from './SortTransactions';
import SelectCategory from './SelectCategory';
import AllTransactions from './AllTransactions';
import Pagination from './Pagination';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useMenuMinMaxStyles} from '~/Hooks';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function DisplayTransactions() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getTransactions = async () => {
        setLoading(true);
        const response = await fetch('https://finance-app-server.netlify.app/get_transactions', {
            method: 'GET',
            credentials: 'include'
        });

        if(response.status === 200){
            const result = await response.json();
            dispatch({type: 'UPDATE_TRANSACTIONS', payload: result});
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
            }, 500)
        }
        setLoading && setLoading(false);
    }

    useEffect(() => {
        getTransactions();
        document.addEventListener('database-update', getTransactions);

        return () => {
            document.removeEventListener('database-update', getTransactions)
        }
    }, [])


    return(
        <div className={chooseQueries('transactions')}>
            <SearchBox/>
            <SortTransactions/>
            <SelectCategory/>
            {loading ? 
                <div className={styles.loading_container}>
                    <Skeleton width='100%' height='73px' borderRadius={8}/>
                    <Skeleton width='100%' height='73px' borderRadius={8}/>
                    <Skeleton width='100%' height='73px' borderRadius={8}/>
                    <Skeleton width='100%' height='73px' borderRadius={8}/>
                    <Skeleton width='100%' height='73px' borderRadius={8}/>
                    <Skeleton width='100%' height='73px' borderRadius={8}/>
                </div> 
                : <AllTransactions/>}
            <Pagination/>
        </div>
    )
}

export default DisplayTransactions;