import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Piechart from './Piechart';
import classnames from 'classnames';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Budgets(){
    const isMenuMimized = useSelector(state => state.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized])

    return(
        <section className={classnames(styles.budgets, mediaQuery.budgets)}>
            <h1 className={classnames(styles.budgets_title, mediaQuery.budgets_title)}>
                My Budgets
            </h1>
            <button className={classnames(styles.budgets_button, mediaQuery.budgets_button)}>
                See Details
                <div className={classnames(styles.budgets_arrow, mediaQuery.budgets_arrow)}/>
            </button>
            <Piechart/>
        </section>
    )
}

export default Budgets;