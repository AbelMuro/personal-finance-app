import React, {useState} from 'react';
import { ClipLoader } from 'react-spinners';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';

function Login({setPage}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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
            setLoading(false);
            navigate('/profile');
        }
        else{
            const error = await response.json();
            console.log(error);   
            setLoading(false);         
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
                {loading ? <ClipLoader size='35px' color='white'/> : 'Login'}
            </button>
            <p className={styles.form_register}>
                Need to create an account? <a onClick={handleSignUp}>Sign Up</a>
            </p>
        </form>
    )
}

export default Login;