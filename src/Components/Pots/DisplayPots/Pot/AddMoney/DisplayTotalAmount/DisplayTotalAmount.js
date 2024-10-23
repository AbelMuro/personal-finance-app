import React, {useContext, useState, useEffect} from 'react';
import {PotsContext} from '@/Pot';
import * as styles from './styles.module.css';

function DisplayTotalAmount({amount}) {
    let integerAmount = Number(amount);
    const {savings, target} = useContext(PotsContext);
    const [oldPercent, setOldPercent] = useState('0%');
    const [newPercent, setNewPercent]  = useState('0%');
    const [totalPercent, setTotalPercent] = useState(0);

    useEffect(() => {
        const oldPer = savings / target * 100;
        const newPer = (savings + integerAmount)/target * 100;
        setOldPercent(`${oldPer}%`);
        setNewPercent(newPer > oldPer ? `${newPer}%` : `${oldPer}%`)
        setTotalPercent(newPer > oldPer ? newPer : oldPer);
    }, [savings, target, amount])

    return(
        <section className={styles.amount}>
            <p className={styles.amount_title}>
                New Amount
            </p>  
            <strong className={styles.amount_total}>
                ${(integerAmount + savings).toFixed(2)}
            </strong>  
            <div className={styles.amount_progress}>
                {oldPercent !== '0%' && <div className={styles.amount_oldAmount} style={{width: oldPercent}}/>}
                {newPercent !== '0%' && <div className={styles.amount_newAmount} style={{width: newPercent}}/>}
            </div>
            <em className={styles.amount_percent} style={integerAmount !== 0 ?  {color: '#277C78'} : {color: '#201F24'}}>
                {totalPercent.toFixed(2)}%
            </em>
            <p className={styles.amount_target}>
                Target of ${target}
            </p>
        </section>
    )
}

export default DisplayTotalAmount;