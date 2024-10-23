import React, {useContext, useState, useEffect} from 'react';
import {PotsContext} from '@/Pot';
import * as styles from './styles.module.css';

function DisplayTotalAmount({amount}) {
    let integerAmount = Number(amount);
    const {savings, target} = useContext(PotsContext);
    const [newPercent, setNewPercent] = useState('0%');
    const [oldPercent, setOldPercent] = useState('0%');
    const [totalPercent, setTotalPercent] = useState(0);

    useEffect(() => {
        const oldPer = savings / target * 100;
        const newPer = (savings - integerAmount)/target * 100;
        setNewPercent(`${newPer}%`);
        setOldPercent(`${oldPer}%`);
        setTotalPercent(newPer > oldPer ? oldPer : newPer);
    }, [savings, target, amount])

    return(
        <section className={styles.amount}>
            <p className={styles.amount_title}>
                New Amount
            </p>  
            <strong className={styles.amount_total}>
                ${(savings - integerAmount).toFixed(2)}
            </strong>  
            <div className={styles.amount_progress}>
                {newPercent !== '0%' && <div className={styles.amount_new} style={{width: newPercent}}/>}
                {oldPercent !== '0%' && <div className={styles.amount_old} style={{width: oldPercent}}/>}
            </div>
            <em className={styles.amount_percent} style={integerAmount !== 0 ?  {color: '#C94736'} : {color: '#201F24'}}>
                {totalPercent.toFixed(2)}%
            </em>
            <p className={styles.amount_target}>
                Target of ${target}
            </p>
        </section>
    )
}

export default DisplayTotalAmount;