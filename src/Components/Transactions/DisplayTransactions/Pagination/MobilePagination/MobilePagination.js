import React, {useMemo} from 'react';
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
        const allPages = transactions.length / 10;
        let fullPages = Math.floor(allPages);
        const halfPages = allPages - Math.floor(allPages).toFixed(1);
        let totalPages = fullPages;
        if(halfPages > 0)   
            totalPages += 1;

        const paginationButtons = [];
        let hasOneDotButton = false;

        for(let i = 1; i <= totalPages; i++){
            if(i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1))
                paginationButtons.push(
                    <button 
                        className={styles.pagination_page}
                        onClick={() => handlePage(i)} 
                        style={currentPage === i ? {backgroundColor: '#201F24', color: '#FFF'} : {}}
                        key={i}
                        >
                            {i}
                    </button>
                )
            else {
                if(hasOneDotButton)
                        continue;
                hasOneDotButton = true;
                paginationButtons.push(
                    <button className={styles.pagination_page_dotted} key={i}>
                        ...
                    </button>                    
                )
            }
        }

        return paginationButtons;
    },[currentPage, transactions])

    return(
        <div className={styles.pagination}>
            {allButtons}
        </div>
    )
}

export default MobilePagination;