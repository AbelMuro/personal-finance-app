import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {useMenuMinMaxStyles} from '~/Hooks';
import Pot from './Pot';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function DisplayPots() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const [pots, setPots] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getPots = async() => {
        setLoading(true);
        const response = await fetch('http://localhost:4000/get_pots', {
            method: 'GET',
            credentials: 'include'
        })

        if(response.status === 200){
            const results = await response.json();
            setPots(results);
        }
        else if(response.status === 500) {
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000);
            return;
        }

        setLoading && setLoading(false);
    }

    useEffect(() => {
        getPots();
        document.addEventListener('database-update', getPots);

        return () => {
            document.removeEventListener('database-update', getPots);
        }
    }, [])

    return(
        <div className={chooseQueries('pots')}>
            {loading ?  
                <>
                    <Skeleton width='100%' height='300px' borderRadius={8}/>
                    <Skeleton width='100%' height='300px' borderRadius={8}/>
                    <Skeleton width='100%' height='300px' borderRadius={8}/>
                    <Skeleton width='100%' height='300px' borderRadius={8}/>
                </> : 
                pots.length ? pots.map((pot) => {
                    const name = pot.name;
                    const target = pot.target;
                    const theme = pot.theme;
                    const potId = pot.potId;
                    const savings = pot.savings;

                    return(
                        <Pot 
                            name={name} 
                            target={target} 
                            theme={theme} 
                            potId={potId} 
                            savings={savings}
                            key={theme}/>
                    )
                }) : <p className={styles.empty_message}> You have no pots available</p>}
        </div>
    )
}

export default DisplayPots;