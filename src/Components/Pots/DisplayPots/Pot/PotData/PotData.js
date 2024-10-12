import React, {useContext, useState, useEffect} from 'react';
import Themes from '~/Themes'
import { PotsContext } from '@/Pot';
import * as styles from './styles.module.css';

function PotData(){
    const {target, savings, theme} = useContext(PotsContext);
    const [percent, setPercent] = useState('0%');

    useEffect(() => {
        const percent = savings / target * 100;
        if(percent > 100)
            setPercent('100%')
        else
            setPercent(`${percent}%`);
    }, [savings, target])


    return(
        <div className={styles.pot}>
            <p className={styles.pot_title}>
                Total Saved
            </p>
            <strong className={styles.pot_saved}>
                ${savings.toFixed(2)}
            </strong>
            <div className={styles.pot_progress} aria-description='progress bar'> 
                <div className={styles.pot_bar} style={{backgroundColor: Themes[theme], width: percent}}/>
            </div>
            <em className={styles.pot_percent}>
                7.95%
            </em>
            <p className={styles.pot_target}>
                Target of ${target.toFixed(2)}
            </p>
        </div>
    )
}

export default PotData;