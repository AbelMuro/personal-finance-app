import React from 'react';

function NoInternet() {
    const [mobile] = useMediaQuery('(max-width: 620px)');

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                No Internet Connection
            </h1>  
            <p className={styles.desc}>
                {mobile ? "Check internet connection" : 'Please check your internet connection'}
            </p>          
        </section>
    )
}

export default NoInternet;