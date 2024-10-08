import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import SortTransactions from './SortTransactions';
import SelectCategory from './SelectCategory';
import AllTransactions from './AllTransactions';
import Pagination from './Pagination';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import {useSelector} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function DisplayTransactions() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const getTransactions = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:4000/get_transactions', {
            method: 'GET',
            credentials: 'include'
        });

        if(response.status === 200){
            const result = await response.json();
            dispatch({type: 'UPDATE_TRANSACTIONS', payload: result});
        }
        else if(response.status === 500){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }
        setLoading && setLoading(false);
    }

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

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