import React, {useState, useEffect} from 'react'
import Header from './Header';
import SpendingSummary from './SpendingSummary';
import DisplayBudget from './DisplayBudget';
import classnames from 'classnames';
import {useMediaQuery} from '~/Hooks';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Budgets() {
    const [allBudgets, setAllBudgets] = useState([]);
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    const getBudgets = async () => {
        const response = await fetch('http://localhost:4000/get_budgets', {
            method: 'GET',        
            credentials: 'include',
        }); 

        if(response.status === 200){
            const budgets = await response.json();
            const allBudgets = budgets.map((budget) => {
                return (
                    <DisplayBudget 
                        key={budget.category}
                        category={budget.category} 
                        maxSpending={budget.maxSpending} 
                        theme={budget.theme}/>
                )
            });
            setAllBudgets(allBudgets);
        }
        else{
            const message = await response.text();
            console.log(message)
        }        
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    useEffect(() => {
        getBudgets();
    }, [])

    return(
        <section className={chooseQueries('container')}>
            <Header/>
            <SpendingSummary/>
            <div className={chooseQueries('allBudgets')}>
                {allBudgets}
            </div>
        </section>
    )
}

export default Budgets;