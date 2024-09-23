import React, {useState} from 'react';
import * as styles from './styles.module.css';

function MobilePagination() {
    const [page, setPage] = useState('1');

    const handlePage = (page) => {
        setPage(page);
    }

    return(
        <div className={styles.pagination}>
            <button className={styles.pagination_page} onClick={() => handlePage('1')} style={page === '1' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                1
            </button>
            <button className={styles.pagination_page} onClick={() => handlePage('2')} style={page === '2' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                2
            </button>
            <button className={styles.pagination_page}>
                ...
            </button>
            <button className={styles.pagination_page} onClick={() => handlePage('4')} style={page === '4' ? {backgroundColor: '#201F24', color: '#FFF'} : {}}>
                5
            </button>
        </div>
    )
}

export default MobilePagination;