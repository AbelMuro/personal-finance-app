import React, {useState, useEffect} from 'react';
import ProgressBar from './ProgressBar';
import LatestSpending from './LatestSpending';
import EditBudget from './EditBudget';
import classnames from 'classnames';
import {useMediaQuery} from '~/Hooks';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';

function DisplayBudget() {
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

    return(
        <section className={chooseQueries('budget')}>
            <div className={styles.budget_header}>
                <div className={styles.budget_color}/>
                <h2 className={styles.budget_title}>
                    Entertainment
                </h2>
                <EditBudget/>
            </div>
            <ProgressBar/>
            <LatestSpending/>
        </section>
    )
}

export default DisplayBudget;