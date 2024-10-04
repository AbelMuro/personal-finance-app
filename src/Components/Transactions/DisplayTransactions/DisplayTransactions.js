import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import SortTransactions from './SortTransactions';
import SelectCategory from './SelectCategory';
import AllTransactions from './AllTransactions';
import Pagination from './Pagination';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';


function DisplayTransactions() {
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
        <div className={chooseQueries('transactions')}>
            <SearchBox/>
            <SortTransactions/>
            <SelectCategory/>
            <AllTransactions/>
            <Pagination/>
        </div>
    )
}

export default DisplayTransactions;