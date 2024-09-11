import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function SignUp({setPage}) {
    
    const handleLogin = () => {
        setPage('Login');
    }

    return(
        <form className={styles.form}>
            <strong className={styles.form_title}>
                Sign Up
            </strong>
            <EnterName/>
            <EnterEmail/>
            <EnterPassword/>
            <button className={styles.form_submit}>
                Create Account
            </button>
            <p className={styles.form_login}>
                Already have an account? <a onClick={handleLogin}>Login</a>
            </p>
        </form>
    )
} 

export default SignUp;