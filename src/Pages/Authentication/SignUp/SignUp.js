import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function SignUp({setPage}) {
    
    const handleLogin = () => {
        setPage('Login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, 
                email,
                password
            })
        });

        if(response.status === 200){
            setPage('Login');
            alert('Account has been created, you can now login');
        }
        else{
            const error = await response.json();
            console.log(error);
            alert('Email already exists');
        }
            
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