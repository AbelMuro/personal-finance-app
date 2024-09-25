import React, {useState, useEffect} from 'react'
import Header from './Header';
import SpendingSummary from './SpendingSummary';
import DisplayBudget from './DisplayBudget';
import * as styles from './styles.module.css';

function Budgets() {
    const [profile, setProfile] = useState(null);

    return(
        <section className={styles.container}>
            <Header/>
            <SpendingSummary/>
            <DisplayBudget/>
        </section>
    )
}

export default Budgets;