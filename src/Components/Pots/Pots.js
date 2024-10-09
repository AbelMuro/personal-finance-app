import React from 'react';
import Header from './Header';
import * as styles from './styles.module.css';

//need to display all the pots from data base now
function Pots() {
    return(
        <section className={styles.container}>
            <Header/>
        </section>
    )
}

export default Pots;