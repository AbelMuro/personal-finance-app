import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function SignUp({setPage}) {
    
    const handleLogin = () => {
        setPage('Login');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log(name, email, password);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
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