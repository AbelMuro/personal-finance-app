import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';

function MobilePagination() {
    const page = useSelector(state => state.transactions.page);
    const dispatch = useDispatch();

    const handlePage = (page) => {
        dispatch({type: 'UPDATE_PAGE', payload: page});
    }

    return(
        <div className={styles.pagination}>
            <button className={styles.pagination_page} onClick={() => handlePage(1)} style={page === 1 ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                1
            </button>
            <button className={styles.pagination_page} onClick={() => handlePage(2)} style={page === 2 ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                2
            </button>
            <button className={styles.pagination_page}>
                ...
            </button>
            <button className={styles.pagination_page} onClick={() => handlePage(5)} style={page === 5 ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                5
            </button>
        </div>
    )
}

export default MobilePagination;