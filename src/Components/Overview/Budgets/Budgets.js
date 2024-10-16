import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import Piechart from './Piechart';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Budgets(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <section className={chooseQueries('budgets')}>
            <h1 className={chooseQueries('budgets_title')}>
                Budgets
            </h1>
            <button className={chooseQueries('budgets_button')}>
                See Details
                <div className={chooseQueries('budgets_arrow')}/>
            </button>
            <Piechart/>
        </section>
    )
}

export default Budgets;