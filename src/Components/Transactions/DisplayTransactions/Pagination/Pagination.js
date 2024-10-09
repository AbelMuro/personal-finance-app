import React, {useMemo, useRef} from 'react';
import MobilePagination from './MobilePagination';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css'
import {useMediaQuery} from '~/Hooks';

function Pagination() {
    const totalPages = useRef(0);
    const currentPage = useSelector(state => state.transactions.page);
    const transactions = useSelector(state => state.transactions.transactions);
    const dispatch = useDispatch();
    const [mobile] = useMediaQuery('(max-width: 620px)');

    const handlePage = (page) => {
        dispatch({type: 'UPDATE_PAGE', payload: page});
    }

    const handleNext = () => {
        if(currentPage === totalPages.current) return;
        dispatch({type: 'UPDATE_PAGE', payload: currentPage + 1})
    }

    const handlePrev = () => {
        if(currentPage === 1) return;
        dispatch({type: 'UPDATE_PAGE', payload: currentPage - 1});
    }

    const displayPages = useMemo(() => {
        const allPages = transactions.length / 10;
        let fullPages = Math.floor(allPages);
        const halfPages = allPages - Math.floor(allPages).toFixed(1);
        totalPages.current = fullPages
        if(halfPages > 0)   
            totalPages.current += 1;

        const buttonsPerPage = 5;                           //2
        const start = Math.max(1, currentPage - Math.floor(buttonsPerPage / 2));
        const end = Math.min(totalPages.current, start + buttonsPerPage - 1);
        const pages = [];

        for(let i = start; i <= end; i++){
            pages.push(                
                <button 
                    className={styles.pagination_page} 
                    onClick={() => handlePage(i)} 
                    style={currentPage === i ? {backgroundColor: '#201F24', color: '#FFF'} : {}}
                    key={i}>
                        {i}
                </button>
            )
        }

        return pages;
    }, [currentPage, transactions])



    return(
        <div className={styles.pagination}>
            <button className={styles.pagination_prev} onClick={handlePrev}>
                <div className={styles.pagination_prev_arrow}/>
                {!mobile && 'Prev'}
            </button>
            {mobile ? <MobilePagination/> : 
                <div className={styles.pagination_pages}>
                    {displayPages}
                </div>}
            <button className={styles.pagination_next} onClick={handleNext}>
                {!mobile && 'Next'}
                <div className={styles.pagination_next_arrow}/>
            </button>
        </div>
    )
}

export default Pagination;