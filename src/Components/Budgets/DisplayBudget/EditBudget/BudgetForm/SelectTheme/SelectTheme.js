import React, {useState} from 'react';
import * as styles from './styles.module.css';
import { dropdownVariant } from './Variants';
import {motion, AnimatePresence} from 'framer-motion';
import icons from './icons';

function SelectTheme() {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('Green')

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleColor = (color) => {
        setColor(color)
    }


    return(
        <fieldset className={styles.container} onClick={handleOpen}>
            <strong>
                Theme
            </strong>
            <div className={styles.selectbox}>
                <div>
                    {<img className={styles.selectbox_color} src={icons[color]}/>}
                    {color}
                </div>
                
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
                            <li onClick={() => handleColor('Green')}>
                               <img src={icons['Green']}/> Green
                            </li>
                            <li onClick={() => handleColor('Yellow')}>
                                <img src={icons['Yellow']}/> Yellow
                            </li>
                            <li onClick={() => handleColor('Cyan')}>
                                <img src={icons['Cyan']}/> Cyan
                            </li>
                            <li onClick={() => handleColor('Navy')}>
                                <img src={icons['Navy']}/> Navy
                            </li>
                            <li onClick={() => handleColor('Red')}>
                                <img src={icons['Red']}/> Red
                            </li>
                            <li onClick={() => handleColor('Purple')}>
                                <img src={icons['Purple']}/> Purple
                            </li>
                            <li onClick={() => handleColor('Turquoise')}>
                                <img src={icons['Turquoise']}/> Turquoise
                            </li>
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='theme' value={color}/>
        </fieldset>
    )
}

export default SelectTheme;