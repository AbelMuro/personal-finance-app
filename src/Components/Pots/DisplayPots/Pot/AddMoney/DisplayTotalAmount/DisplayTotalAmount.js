import React, {useContext, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {PotsContext} from '@/Pot';
import * as styles from './styles.module.css';

function DisplayTotalAmount({amount}) {
    const {savings, target} = useContext(PotsContext);
    const [savingsPercent, setSavingsPercent] = useState('0%');
    const [newAmountPercent, setNewAmountPercent]  = useState('0%');
    const [totalPercent, setTotalPercent] = useState(0);

    useEffect(() => {
        const currPer = savings / target * 100;
        const newPer = (savings + amount)/target * 100;
        setSavingsPercent(`${currPer}%`);
        setNewAmountPercent(newPer > 100 ? '100%' : `${newPer}%`)
        setTotalPercent(newPer > currPer ? newPer : currPer);
    }, [savings, target, amount])


    return(
        <section className={styles.amount}>
            <p className={styles.amount_title}>
                New Amount
            </p>  
            <strong className={styles.amount_total}>
                ${amount}
            </strong>  
            <div className={styles.amount_progress}>
                {savingsPercent !== '0%' && <div className={styles.amount_oldAmount} style={{width: savingsPercent}}/>}
                {newAmountPercent !== '0%' && <div className={styles.amount_newAmount} style={{width: newAmountPercent}}/>}
            </div>
            <em className={styles.amount_percent}>
                {totalPercent.toFixed(2)}%
            </em>
            <p className={styles.amount_target}>
                Target of ${target}
            </p>
        </section>
    )
}

export default DisplayTotalAmount;