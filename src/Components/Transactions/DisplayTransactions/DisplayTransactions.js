import React from 'react';
import SearchBox from './SearchBox';
import * as styles from './styles.module.css';

//this is where i left off, i will need to work on the sorting component and the category component
function DisplayTransactions() {
    return(
        <div className={styles.transactions}>
            <SearchBox/>
        </div>
    )
}

export default DisplayTransactions;