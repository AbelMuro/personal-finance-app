import React, {useState, useEffect, createContext} from 'react';
import Pot from './Pot';
import * as styles from './styles.module.css';

function DisplayPots() {
    const [pots, setPots] = useState([]);

    const getPots = async() => {
        const response = await fetch('http://localhost:4000/get_pots', {
            method: 'GET',
            credentials: 'include'
        })

        if(response.status === 200){
            const results = await response.json();
            console.log(results);
            setPots(results);
        }
        else if(response.status === 500) {
            const message = await response.text();
            console.log(message);
        }
    }

    useEffect(() => {
        getPots();
        document.addEventListener('database-update', getPots);

        return () => {
            document.removeEventListener('database-update', getPots);
        }
    }, [])

    return(
        <div className={styles.pots}>
            {pots.map((pot) => {
                const name = pot.name;
                const target = pot.target;
                const theme = pot.theme;

                return(
                    <Pot name={name} target={target} theme={theme} key={theme}/>
                )
            })}
        </div>
    )
}

export default DisplayPots;