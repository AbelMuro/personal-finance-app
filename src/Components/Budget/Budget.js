import React, {useState, useEffect} from 'react'
import Header from './Header';
import SpendingSummary from './SpendingSummary';
import * as styles from './styles.module.css';

function Budget() {
    const [profile, setProfile] = useState(null);

    return(
        <section className={styles.container}>
            <Header/>
            <SpendingSummary/>
        </section>
    )
}

export default Budget;