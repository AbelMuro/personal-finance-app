import React, {useState, useRef, useEffect, useContext} from 'react';
import {PotsContext} from '@/Pot'
import {useNavigate} from 'react-router-dom';
import {dropdownVariant} from './Variants';
import icons from './icons';
import * as styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function EnterTheme() {
    const {theme} = useContext(PotsContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(theme);
    const [allThemes, setAllThemes] = useState([]);
    const allThemesRef = useRef(['Green', 'Yellow', 'Cyan', 'Navy', 'Red', 'Purple', 'Turquoise']);

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleColor = (color) => {
        setColor(color)
    }

    const getPots = async () => {
        const response = await fetch('http://localhost:4000/get_pots', {
            method: 'GET',        
            credentials: 'include',
        }); 

        if(response.status === 200){
            const pots = await response.json();
            const potThemes = pots.map(pot => pot.theme)
            const formatThemes = allThemesRef.current.map((theme) => {
                if(potThemes.includes(theme))
                    return (
                        <li key={theme} style={{pointerEvents: 'none'}}>
                            <img src={icons[theme]} style={{opacity: 0.25}}/> 
                            <span style={{color: '#696868'}}>{theme}</span>
                            <p>
                                Already used
                            </p> 
                         </li>
                    )
                else{
                    return (                         
                        <li onClick={() => handleColor(theme)} key={theme}>
                            <img src={icons[theme]}/> 
                            <span>{theme}</span>
                        </li>
                    )                     
                }
            });
            setAllThemes(formatThemes);
        }
        else if(response.status === 500){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }        
    }

    useEffect(() => {
        getPots(); 
    }, [])


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
                           {allThemes}
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='theme' value={color}/>
        </fieldset>
    )
}

export default EnterTheme;