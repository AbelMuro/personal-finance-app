import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import {useDispatch, useSelector} from 'react-redux';
import icons from './icons';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function SearchBox() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const dispatch = useDispatch();
    const search = useSelector(state => state.bills.search);

    const handleSearch = (e) => {
        const input = e.target.value;
        dispatch({type: 'UPDATE_SEARCH_BILLS', payload: input});
    }

    return(
        <div className={chooseQueries('container')}>
            <input 
                type='text' 
                value={search}
                onChange={handleSearch}
                className={styles.search}
                placeholder='Search bills'
                />
            <img className={styles.search_icon} src={icons['search']}/>
        </div>
    )
}

export default SearchBox;