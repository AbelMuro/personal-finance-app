import React from 'react';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';

function Login({setPage}) {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: 'include'
        });

        if(response.status === 200){
            console.log('Login Successfull');
            navigate('/profile');
        }
        else{
            const error = await response.json();
            console.log(error);            
            alert('Email or password is incorrect');
        }   
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