import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';

//this is where i left off, i will need to figure out how the 3 dot button works
function MobilePagination() {
    const currentPage = useSelector(state => state.transactions.page);
    const transactions = useSelector(state => state.transactions.transactions);
    const dispatch = useDispatch();

    const handlePage = (page) => {
        dispatch({type: 'UPDATE_PAGE', payload: page});
    }

    const allButtons = useMemo(() => {
        let totalPages = Math.floor(transactions.length / 10);
        const halfPages = totalPages - Math.floor(totalPages).toFixed(1);
        if(halfPages > 0)   
            totalPages += 1;
        const buttonsPerPage = 4;
        
        const start = Math.max(1, currentPage - Math.floor(buttonsPerPage / 2));
        const end = Math.min(totalPages, start + buttonsPerPage - 1);
        const pages = [];

        for(let i = start; i < end; i++){

        }
    })

    return(
        <div className={styles.pagination}>
            <button className={styles.pagination_page} onClick={() => handlePage(1)} style={currentPage === 1 ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                1
            </button>
            <button className={styles.pagination_page} onClick={() => handlePage(2)} style={currentPage === 2 ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                2
            </button>
            <button className={styles.pagination_page}>
                ...
            </button>
            <button className={styles.pagination_page} onClick={() => handlePage(5)} style={currentPage === 5 ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                5
            </button>
        </div>
    )
}

export default MobilePagination;