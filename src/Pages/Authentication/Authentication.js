import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import icons from './icons';
import * as styles from './styles.module.css';

function Authentication() {
    const [page, setPage] = useState('Login');

    return(
        <main className={styles.authentication}>
            <header className={styles.authentication_header}>
                <img src={icons['logo']}/>
            </header>
            <div className={styles.authentication_image}> 
                <img className={styles.authentication_logo} src={icons['logo']}/>
                <section className={styles.authentication_content}>
                    <h1>
                        Keep track of your money
                        and save for your future
                    </h1>
                    <p>
                        Personal finance app puts you in control of your spending. 
                        Track transactions, set budgets, and add to savings pots easily.
                    </p>
                </section>
            </div>
            {page === 'Login' ? <Login setPage={setPage}/> : <SignUp setPage={setPage}/>}
        </main>
    );
} 

export default Authentication;