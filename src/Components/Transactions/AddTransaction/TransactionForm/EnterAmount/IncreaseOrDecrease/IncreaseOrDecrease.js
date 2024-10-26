import React, {useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';
import { dropdownVariant } from './Variants';

function IncreaseOrDecrease() {
    const [option, setOption] = useState('-');
    const [open, setOpen] = useState(false);

    const rotateArrow = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleOption = (option) => {
        setOption(option)
    }

    return(
        <div className={styles.container} onClick={handleOpen}>
            <div className={styles.input}>
                {option}
            </div>
            <img className={styles.arrow} src={icons['arrow']} style={open ? rotateArrow : {}}/>
            <AnimatePresence>
                {open &&
                    <motion.ul 
                        className={styles.dropdown} 
                        variants={dropdownVariant}
                        initial='hide'
                        animate='show'
                        exit='exit'
                        >
                            <li className={styles.dropdown_option} onClick={() => handleOption('+')}>
                                +
                            </li>
                            <li className={styles.dropdown_option} onClick={() => handleOption('-')}>
                                -
                            </li>
                    </motion.ul>     
                }
            </AnimatePresence>
            <input type='hidden' value={option} name='plusOrMinus'/>
        </div>
    )
}

export default IncreaseOrDecrease;