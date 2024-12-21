import React, {useState, useEffect} from 'react';
import TotalBills from './TotalBills';
import Summary from './Summary';
import AllBills from './AllBills';
import {useDispatch} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {useMenuMinMaxStyles} from '~/Hooks';
import { useNavigate } from 'react-router-dom';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function BillDetails() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const getBills = async () => {
        setLoading(true);
        const response = await fetch('https://finance-app-server.netlify.app/get_bills', {
            method: 'GET',
            credentials: 'include'
        });

        if(response.status === 200){
            const results = await response.json();
            dispatch({type: 'UPDATE_BILLS', payload: results});
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
    };

    useEffect(() => {
        getBills();
        document.addEventListener('database-update', getBills);

        return () => {
            document.removeEventListener('database-update', getBills);
        } 
    }, []);


    return(
        <section className={chooseQueries('container')}>
            {loading ? 
                <div className={chooseQueries('loading')}>
                    <Skeleton borderRadius={8} className={chooseQueries('loading_bills')}/>
                    <Skeleton borderRadius={8} className={chooseQueries('loading_summary')}/>
                </div> : 
                <div className={chooseQueries('column')}>
                    <TotalBills/>
                    <Summary/>                  
                </div>}
            {loading ? <Skeleton width='100%' height='300px' borderRadius={8}/> : <AllBills/>}
        </section>            
    )
}

export default BillDetails;