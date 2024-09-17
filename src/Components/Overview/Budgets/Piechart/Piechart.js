import React from 'react';
import * as styles from './styles.module.css';
import {useMinimizeStyles} from '~/Hooks';


// this is where i left off, need to continue working on the responsiveness
function Piechart(){
    const [resize] = useMinimizeStyles();

    const resizePieChartStyle = {
        width: '180px',
        height: '180px'
    }

    const resizeWhiteCircleStyle = {
        width: '140px',
        height: '140px',
    } 

    return(
        <>
            <div className={styles.budgets_piechart} style={resize ? resizePieChartStyle : {}}>
                <div className={styles.budgets_whiteCircle} style={resize ? resizeWhiteCircleStyle : {}}>
                    <strong>
                        $407
                    </strong>
                    <p>
                        of $975 limit
                    </p>
                </div>
            </div>
            <section className={styles.budgets_allBudgets}>
                <div className={styles.budgets_budget}>
                    <div className={styles.budgets_color} style={{backgroundColor: '#277C78'}}/>
                    <h2>
                        Entertainment
                    </h2>
                    <strong>
                        $25.00
                    </strong>
                </div>  
                <div className={styles.budgets_budget}>
                    <div className={styles.budgets_color} style={{backgroundColor: '#82C9D7'}}/>
                    <h2>
                        Bills
                    </h2>
                    <strong>
                        $250.00
                    </strong>
                </div>
                <div className={styles.budgets_budget}>
                    <div className={styles.budgets_color} style={{backgroundColor: '#626070'}}/>
                    <h2>
                        Personal Care
                    </h2>
                    <strong>
                        $65.00
                    </strong>
                </div>
                <div className={styles.budgets_budget}>
                    <div className={styles.budgets_color} style={{backgroundColor: '#F2CDAC'}}/>
                    <h2>
                        Dining Out
                    </h2>
                    <strong>
                        $67.00
                    </strong>
                </div>              
            </section>
        </>
    )
}

export default Piechart