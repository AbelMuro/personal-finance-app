import React, {useState, useEffect} from 'react'
import Header from './Header';
import SpendingSummary from './SpendingSummary';
import DisplayBudget from './DisplayBudget';
import classnames from 'classnames';
import {useMediaQuery} from '~/Hooks';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';


//now i need to work on the tablet designs for this app
function Budgets() {
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
        <section className={chooseQueries('container')}>
            <Header/>
            <SpendingSummary/>
            <DisplayBudget/>
        </section>
    )
}

export default Budgets;