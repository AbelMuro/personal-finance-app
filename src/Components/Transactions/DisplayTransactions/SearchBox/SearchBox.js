import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import icons from './icons';
import classnames from 'classnames'
import {useMediaQuery} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SearchBox() {
    const dispatch = useDispatch();
    const search = useSelector(state => state.transactions.search);
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    const handleSearch = (e) => {
        dispatch({type: 'UPDATE_SEARCH', payload: e.target.value});
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized]);


    return(
        <div className={chooseQueries('container')}>
            <input 
                type='text' 
                value={search}
                onChange={handleSearch}
                className={styles.search}
                placeholder='Search transaction'
                />
            <img className={styles.search_icon} src={icons['search']}/>
        </div>
    )
}

export default SearchBox;