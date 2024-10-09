import React, {useState} from 'react';
import EnterPotName from './EnterPotName';
import EnterTarget from './EnterTarget';
import EnterTheme from './EnterTheme';
import { ClipLoader } from 'react-spinners';
import * as styles from './styles.module.css';

function PotForm({handleOpen}) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.elements.potName.value;
        const target = e.target.elements.target.value;
        const theme = e.target.elements.theme.value;

        const response = await fetch('http://localhost:4000/add_pot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                target,
                theme
            }),
            credentials: 'include'
        })

        if(response.status === 200){
            const result = await response.text();
            console.log(result);
        }
        else if(response.status === 500){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }

        setLoading && setLoading(false);
        handleOpen && handleOpen();
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterPotName/>
            <EnterTarget/>
            <EnterTheme/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size='35px' color='white'/> :  'Add Pot'}
            </button>
        </form>
    )
}

export default PotForm;