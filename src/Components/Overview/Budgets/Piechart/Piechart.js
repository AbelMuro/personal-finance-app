import React, {useState, useEffect} from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import Themes from '~/Themes';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';


//this is where i left off, i will need to find a way that the total amount of the budgets does not overflow
//i already finished the pot component of the overflow component
function Piechart(){
    const budgets = useSelector(state => state.overview.data.budgets)
    const [fourBudgets, setFourBudgets] = useState([]);
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const [limit, setLimit] = useState(0);
    const [spent, setSpent] = useState(0);
    const [piechart, setPiechart] = useState(`conic-gradient(grey 0% 100%)`);


    useEffect(() => {
        if(!budgets.length) return;

        const fourBudgets = [];
        let limit = 0;
        let spent = 0;
        const piechartValues = [];

        budgets.forEach((budget, i) => {
            if(i < 4)
                fourBudgets.push(budget);
            limit += budget.limit;
            spent += budget.totalSpent;  
        });

        const totalSpent = budgets.reduce((acc, budget) => {
            return acc + budget.totalSpent;
        }, 0)

        budgets.reduce((acc, budget, i) => {
            const currentPercent = budget.totalSpent/totalSpent * 100;
            const endPercent = acc[i - 1] ? acc[i - 1] + currentPercent : currentPercent;      
            const startPercent = acc[i - 1] ? acc[i - 1] : 0;
            acc.push(endPercent);
            piechartValues.push(`${Themes[budget.theme]} ${startPercent}% ${endPercent}%`);
                return acc;
        }, []);  

        let piechart = `conic-gradient(${piechartValues.join(',')})`;
        setPiechart(piechart);
        setFourBudgets(fourBudgets);
        setLimit(limit);
        setSpent(spent);
    }, [budgets])

    return(
        <>
            <div className={chooseQueries('piechart')} style={{background: piechart}}>
                <div className={chooseQueries('piechart_whiteCircle')}>
                    <strong>
                        ${spent.toLocaleString('en-US',{
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </strong>
                    <p>
                        of ${limit} limit
                    </p>
                </div>
            </div>
            <section className={chooseQueries('piechart_allBudgets')}>
                {
                    fourBudgets.map((budget) => {
                        const category = budget.category;
                        const limit = budget.limit;
                        const theme = budget.theme;

                        return(
                            <div className={styles.piechart_budget} key={category}>
                                <div className={styles.piechart_color} style={{backgroundColor: Themes[theme]}}/>
                                <h2>
                                    {category}
                                </h2>
                                <strong>
                                    {limit.toLocaleString('en-US',{
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </strong>
                            </div>  
                        )
                    })
                }       
            </section>
        </>
    )
}

export default Piechart