import React from 'react';
import * as styles from './styles.module.css'
import icons from './icons';

function Pagination() {
    return(
        <div className={styles.pagination}>
            <button className={styles.pagination_prev}>
                <div className={styles.pagination_prev_arrow}/>
                Prev
            </button>
            <div className={styles.pagination_pages}>
                <button className={styles.pagination_page}>
                    1
                </button>
                <button className={styles.pagination_page}>
                    2
                </button>
                <button className={styles.pagination_page}>
                    3
                </button>
                <button className={styles.pagination_page}>
                    4
                </button>
                <button className={styles.pagination_page}>
                    5
                </button>
            </div>
            <button className={styles.pagination_next}>
                Next
                <div className={styles.pagination_next_arrow}/>
            </button>
        </div>
    )
}

export default Pagination;