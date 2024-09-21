import React, {useState} from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function SearchBox() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.search);
    }

    return(
        <div className={styles.container}>
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