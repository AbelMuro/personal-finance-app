import React, {useState, useEffect, createContext} from 'react';
import ProgressBar from './ProgressBar';
import LatestSpending from './LatestSpending';
import EditOrDeleteBudget from './EditOrDeleteBudget';
import classnames from 'classnames';
import {useMediaQuery} from '~/Hooks';
import {useSelector} from 'react-redux';
import Themes from '~/Themes';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

export const Budget = createContext();

function DisplayBudget({category, limit, theme, transactions, budgetId, totalSpent}) {
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    return(
        <Budget.Provider value={{
            budgetId,
            category,
            limit,
            theme,
            transactions,
            totalSpent
        }}>
            <section className={chooseQueries('budget')}>
                <div className={styles.budget_header}>
                    <div className={styles.budget_color} style={{backgroundColor: Themes[theme]}}/>
                    <h2 className={styles.budget_title}>
                        {category}
                    </h2>
                    <EditOrDeleteBudget/>
                </div>
                <ProgressBar/>
                <LatestSpending/>
            </section>            
        </Budget.Provider>

    )
}

export default DisplayBudget;