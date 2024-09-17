import React, {useEffect} from 'react';
import Header from './Header';
import Pots from './Pots';
import Budgets from './Budgets';
import {useMinimizeStyles} from '~/Hooks';
import * as styles from './styles.module.css';

function Overview(){
    const [resize] = useMinimizeStyles();

    const resizeFlexStyles = {
        width: '100%'
    }

    const resizeGridStyles = {
        gridTemplateColumns: '1fr 0.7fr'
    }



    return(
        <section className={styles.overview} style={resize ? resizeFlexStyles : {}}>
            <Header/>
            <div className={styles.overview_misc} style={resize ? resizeGridStyles : {}}>
                <Pots/>
                <Budgets/>
            </div>
        </section>
    )
}

export default Overview;