import React from 'react';
import {useMediaQuery} from '~/Hooks'
import * as styles from './styles.module.css';

function NotFound() {
    const [mobile] = useMediaQuery('(max-width: 620px)');

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                404 Page Not found
            </h1>  
            <p className={styles.desc}>
                {mobile ? "Page doesn't exist" : 'The page you requested has not been found'}
            </p>          
        </section>
    )
}

export default NotFound;