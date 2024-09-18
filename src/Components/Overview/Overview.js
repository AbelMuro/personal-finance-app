import React, {useEffect, useState} from 'react';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import Header from './Header';
import Pots from './Pots';
import Budgets from './Budgets';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Overview(){
    const isMenuMimized = useSelector(state => state.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    return(
        <section className={chooseQueries('overview')}>
            <Header/>
            <div className={chooseQueries('overview_misc')}>
                <Pots/>
                <Budgets/>
            </div>
        </section>
    )
}

export default Overview;