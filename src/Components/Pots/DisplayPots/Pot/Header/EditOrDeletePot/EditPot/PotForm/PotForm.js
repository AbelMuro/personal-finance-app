import React, {useState, useContext} from 'react';
import EnterPotName from './EnterPotName';
import EnterTarget from './EnterTarget';
import EnterTheme from './EnterTheme';
import {PotsContext} from '@/Pot';
import {ClipLoader} from 'react-spinners';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';

function PotForm({handleOpen}) {
    const [loading, setLoading] = useState(false);
    const {potId} = useContext(PotsContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.elements.potName.value;
        const target = e.target.elements.target.value;
        const theme = e.target.elements.theme.value;

        const response = await fetch('http://localhost:4000/edit_pot', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                potId: potId,
                name,
                target: Number(target),
                theme
            })
        });
        
        if(response.status === 200){
            const result = await response.text();
            console.log(result);
            handleOpen();
            const event = new Event('database-update');
            document.dispatchEvent(event);            
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
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterPotName/>
            <EnterTarget/>
            <EnterTheme/>
            <button className={styles.form_submit}>
                {loading ? <ClipLoader size={35} color='white'/> : 'Save Changes'}
            </button>
        </form>
    )
}

export default PotForm;