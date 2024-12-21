import React, {useState} from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import { ClipLoader } from 'react-spinners';
import * as styles from './styles.module.css';

function SignUp({setPage}) {
    const [loading, setLoading] = useState(false);
    
    const handleLogin = () => {
        setPage('Login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        
        const response = await fetch('https://finance-app-server.netlify.app/register', {
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
            setLoading(false);
            setPage('Login');
            setTimeout(() => {
                alert('Account has been created, you can now login');
            }, 200)
            
        }
        else{
            const error = await response.text();
            console.log(error);
            setLoading(false);
            setTimeout(() => {
                alert('Email already exists');
            }, 200)
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
                {loading ? <ClipLoader size='35px' color='white'/> : 'Create Account'}
            </button>
            <p className={styles.form_login}>
                Already have an account? <a onClick={handleLogin}>Login</a>
            </p>
        </form>
    )
} 

export default SignUp;