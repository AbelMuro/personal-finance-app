import React, {useState, useEffect} from 'react';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import {useSelector} from 'react-redux';
import Themes from '~/Themes';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SpendingSummary() {
    const budgets = useSelector(state => state.budgets.budgets);
    const [totalSpent, setTotalSpent] = useState(0);
    const [limit, setLimit] = useState(0);
    const [piechart, setPiechart] = useState(``);
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

    useEffect(() => {
        let limit = 0;
        let totalSpent = 0;

        budgets.forEach((budget) => {
            limit += budget.limit;
            totalSpent += budget.totalSpent
        });

        setLimit(limit);
        setTotalSpent(totalSpent);

        if(totalSpent){
            const piechartValues = [];
            budgets.reduce((acc, budget, i) => {
                const currentPercent = budget.totalSpent/totalSpent * 100;
                const endPercent = acc[i - 1] ? acc[i - 1] + currentPercent : currentPercent;       //acc[i - 1] is the previous percent value
                const startPercent = acc[i - 1] ? acc[i - 1] : 0;
                acc.push(endPercent);
                piechartValues.push(`${Themes[budget.theme]} ${startPercent}% ${endPercent}%`);
                    return acc;
            }, []);  

            let piechart = `conic-gradient(${piechartValues.join(',')})`;
            setPiechart(piechart);
        }
        else{
            setPiechart(`
                conic-gradient(
                    grey 0% 100%
                )`
            )
        }
    }, [budgets])

    return(
        <section className={chooseQueries('spending')}>
            <div 
                className={chooseQueries('spending_piechart')} 
                style={{background: piechart}}>
                    <div className={chooseQueries('spending_whiteCircle')}>
                        <strong className={chooseQueries('spending_piechartTitle')}>
                            ${totalSpent.toFixed(2)}
                        </strong>
                        <p className={chooseQueries('spending_piechartLimit')}>
                            of ${limit} limit
                        </p>
                    </div>
            </div>
            <ul className={styles.spending_summary}>
                <li className={chooseQueries('spending_title')}>
                    Spending Summary
                </li>

                {budgets && budgets.map((budget, i) => {
                    if(i >= 5) return;
                    const category = budget.category;
                    const totalSpent = budget.totalSpent;
                    const limit = budget.limit;
                    const theme = budget.theme;

                    return(
                        <li className={chooseQueries('spending_detail')} key={category}>
                            <div className={styles.color} style={{backgroundColor: Themes[theme]}}/>
                            <p className={styles.spending_category}>
                                {category}
                            </p>
                            <div className={chooseQueries('spending_flex')}>
                                <strong className={styles.spending_total}>
                                    ${totalSpent.toFixed(2)}
                                </strong>
                                <p className={styles.spending_limit}>
                                    of ${limit}
                                </p>                        
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
} 

export default SpendingSummary;