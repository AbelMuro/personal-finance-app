import React, {createContext} from 'react';
import ProgressBar from './ProgressBar';
import LatestSpending from './LatestSpending';
import EditOrDeleteBudget from './EditOrDeleteBudget';
import {useMenuMinMaxStyles} from '~/Hooks';
import Themes from '~/Themes';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

export const Budget = createContext();

function DisplayBudget({category, limit, theme, transactions, budgetId, totalSpent}) {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

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