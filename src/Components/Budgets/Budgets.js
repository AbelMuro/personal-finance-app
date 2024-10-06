import React, {useState, useEffect} from 'react'
import Header from './Header';
import SpendingSummary from './SpendingSummary';
import DisplayBudget from './DisplayBudget';
import classnames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {useMediaQuery} from '~/Hooks';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Budgets() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [allBudgets, setAllBudgets] = useState([]);
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');
    const [mobile] = useMediaQuery('(max-width: 620px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    const getBudgets = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:4000/get_budgets', {
            method: 'GET',        
            credentials: 'include',
        }); 

        if(response.status === 200){
            const budgets = await response.json();
            setAllBudgets(budgets);
        }
        else if(response.status === 500){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }   
        setLoading(false);     
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    useEffect(() => {
        getBudgets();
        document.addEventListener('database-update', getBudgets);

        return () => {
            document.removeEventListener('database-update', getBudgets);
        }
    }, [])

    return(
        <section className={chooseQueries('container')}>
            <Header/>
            {loading ? 
                <Skeleton width='100%' height='300px' borderRadius={8}/> : 
                <SpendingSummary budgets={allBudgets}/>}
            <div className={chooseQueries('allBudgets')}>
                {loading ? 
                    <>
                        <Skeleton width='100%' height='400px' borderRadius={8}/>
                        {!mobile && <Skeleton width='100%' height='400px' borderRadius={8}/>}
                    </> : allBudgets.map((budget) => {
                        return (
                            <DisplayBudget 
                                key={budget.category}
                                budgetId={budget.id}
                                category={budget.category} 
                                limit={budget.limit} 
                                totalSpent={budget.totalSpent}
                                theme={budget.theme}
                                transactions={budget.transactions}/>
                        )
                    })}
            </div>
        </section>
    )
}

export default Budgets;