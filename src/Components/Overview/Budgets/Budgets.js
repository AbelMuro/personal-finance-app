import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '~/Hooks';
import Piechart from './Piechart';
import classnames from 'classnames';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Budgets(){
    const isMenuMimized = useSelector(state => state.minimize);
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
    }, [isMenuMimized])

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