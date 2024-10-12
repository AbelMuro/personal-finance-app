import React, {useState, useRef, useEffect} from 'react';
import Themes from '~/Themes';
import {useNavigate} from 'react-router-dom';
import {dropdownVariant} from './Variants';
import icons from './icons';
import * as styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function EnterTheme() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('Green');
    const [potThemes, setPotThemes] = useState([]);

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
            const potThemes = pots.map(pot => pot.theme);            
            let temp = true;
            Object.entries(Themes).some((theme) => {                //this loop will check for the first available theme
                const themeName = theme[0];
                if(!potThemes.includes(themeName)){
                    temp = false;
                    setColor(themeName);
                    return true;
                }
                else
                    return false;
            });
            if(temp){                                                       //if there are no available themes
                alert('You cannot make any more pots, consider deleting some of your existing pots');
                window.location.reload();
                return;
            }   
            setPotThemes(potThemes);
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
                    {<div className={styles.theme_dot} style={{backgroundColor: Themes[color]}}/>}
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
                            {Object.entries(Themes).map((theme) => {
                                const themeName = theme[0];
                                const themeColor = theme[1];
                                
                                if(potThemes.includes(themeName))
                                    return (
                                        <li key={themeName} style={{pointerEvents: 'none'}}>
                                            <div className={styles.theme_dot} style={{backgroundColor: themeColor, opacity: 0.25}}/>
                                                <span style={{color: '#696868'}}>{themeName}</span>
                                                 <p>
                                                    Already used
                                                </p> 
                                        </li>
                                    )
                                else{
                                    return (                         
                                        <li onClick={() => handleColor(themeName)} key={themeName}>
                                            <div className={styles.theme_dot} style={{backgroundColor: themeColor}}/>
                                                <span>{themeName}</span>
                                                {color === themeName && <img className={styles.checkmark} src={icons['checkmark']}/>}  
                                            </li>
                                        )                     
                                    }
                            })}
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='theme' value={color}/>
        </fieldset>
    )
}

export default EnterTheme;