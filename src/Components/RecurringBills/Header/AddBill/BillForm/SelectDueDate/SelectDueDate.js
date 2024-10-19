import React, {useState, useEffect} from 'react';
import * as styles from './styles.module.css';
import { dropdownVariant } from './Variants';
import { AnimatePresence, motion } from 'framer-motion';
import icons from './icons';

function SelectDueDate() {
    const [open, setOpen] = useState(false);
    const [dueDate, setDueDate] = useState('Monthly-1st');
    const [allDueDates, setAllDueDates] = useState([]);

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleDueDate = (dueDate) => {
        setDueDate(dueDate)
    }

    useEffect(() => {
        const dueDates = [];
        for(let i = 1; i <= 31; i++){
            if(i % 10 === 1)
                dueDates.push(`Monthly-${i}st`);
            else if(i % 10 === 2)
                dueDates.push(`Monthly-${i}nd`);
            else if (i % 10 === 3)
                dueDates.push(`Monthly-${i}rd`);
            else
                dueDates.push(`Monthly-${i}th`)
        }   
            
        setAllDueDates(dueDates);
    }, [])

    return(
        <fieldset className={styles.container} onClick={handleOpen}>
            <strong>
                Select Due Date
            </strong>
            <div className={styles.selectbox}>
                {dueDate}
                <img className={styles.selectbox_arrow} src={icons['arrow']} style={open ? openArrowStyles : {}}/>
            </div>
            <AnimatePresence>
                {open && 
                    <motion.ul 
                        className={styles.dropdown} 
                        variants={dropdownVariant} 
                        initial='hide'
                        animate='show'
                        exit='exit'
                        >
                            {allDueDates.map((dueDate) => {
                                return(
                                    <li onClick={() => handleDueDate(dueDate)} key={dueDate}>
                                        {dueDate}
                                    </li>
                                )
                            })}
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='dueDate' value={dueDate}/>
        </fieldset>
    )
}

export default SelectDueDate;