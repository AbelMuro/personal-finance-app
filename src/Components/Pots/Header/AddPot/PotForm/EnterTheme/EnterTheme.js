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
    const [allThemes, setAllThemes] = useState([]);

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
            let temp = true;                                                    //temp will be used to get the first available theme
            const formatThemes = Object.entries(Themes).map((theme) => {
                const name = theme[0];
                const color = theme[1];

                if(potThemes.includes(name))
                    return (
                        <li key={name} style={{pointerEvents: 'none'}}>
                            <div className={styles.theme_dot} style={{backgroundColor: color, opacity: 0.25}}/>
                            <span style={{color: '#696868'}}>{name}</span>
                            <p>
                                Already used
                            </p> 
                         </li>
                    )
                else{
                    temp && setColor(name);
                    temp = false;
                    return (                         
                        <li onClick={() => handleColor(name)} key={name}>
                            <div className={styles.theme_dot} style={{backgroundColor: color}}/>
                            <span>{name}</span>
                        </li>
                    )                     
                }
            });
            if(temp){                                                       //if there are no available themes
                alert('You cannot make any more pots, consider deleting some of your existing pots');
                window.location.reload();
                return;
            }
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
                           {allThemes}
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='theme' value={color}/>
        </fieldset>
    )
}

export default EnterTheme;