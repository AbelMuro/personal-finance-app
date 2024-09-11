import React from 'react';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Login({setPage}) {

    const handleSubmit = (e) => {
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        console.log(email, password);
    }

    const handleSignUp = () => {
        setPage('SignUp');
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <strong className={styles.form_title}>
                Login
            </strong>
            <EnterEmail/>
            <EnterPassword/>
            <button className={styles.form_submit}>
                Login
            </button>
            <p className={styles.form_register}>
                Need to create an account? <a onClick={handleSignUp}>Sign Up</a>
            </p>
        </form>
    )
}

export default Login;