import React, {useState} from 'react';
import MobilePagination from './MobilePagination';
import * as styles from './styles.module.css'
import {useMediaQuery} from '~/Hooks';

function Pagination() {
    const [mobile] = useMediaQuery('(max-width: 620px)');
    const [page, setPage] = useState('1');

    const handlePage = (page) => {
        setPage(page)
    }


    return(
        <div className={styles.pagination}>
            <button className={styles.pagination_prev}>
                <div className={styles.pagination_prev_arrow}/>
                {!mobile && 'Prev'}
            </button>
            {mobile ? <MobilePagination/> : 
                <div className={styles.pagination_pages}>
                    <button className={styles.pagination_page} onClick={() => handlePage('1')} style={page === '1' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                        1
                    </button>
                    <button className={styles.pagination_page} onClick={() => handlePage('2')} style={page === '2' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                        2
                    </button>
                    <button className={styles.pagination_page} onClick={() => handlePage('3')} style={page === '3' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                        3
                    </button>
                    <button className={styles.pagination_page} onClick={() => handlePage('4')} style={page === '4' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                        4
                    </button>
                    <button className={styles.pagination_page} onClick={() => handlePage('5')} style={page === '5' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                        5
                    </button>
                </div>}
            <button className={styles.pagination_next}>
                {!mobile && 'Next'}
                <div className={styles.pagination_next_arrow}/>
            </button>
        </div>
    )
}

export default Pagination;