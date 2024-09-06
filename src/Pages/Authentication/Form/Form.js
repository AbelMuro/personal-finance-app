import React from 'react';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form () {
    return(
        <form className={styles.form}>
            <strong className={styles.form_title}>
                Login
            </strong>
            <EnterEmail/>
            <EnterPassword/>
        </form>
    )
}

export default Form;