import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Themes from '~/Themes';
import * as styles from './styles.module.css';
import {useNavigate} from 'react-router-dom'
import { dropdownVariant } from './Variants';
import {motion, AnimatePresence} from 'framer-motion';
import icons from './icons';

function SelectTheme() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('');
    const [allThemes, setAllThemes] = useState([]);

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleColor = (color, e) => {
        setColor(color);
    }

    const getBudgets = async () => {
        const response = await fetch('http://localhost:4000/get_budgets', {
            method: 'GET',        
            credentials: 'include',
        }); 

        if(response.status === 200){
            const budgets = await response.json();
            const budgetThemes = budgets.map(budget => budget.theme)
            let temp = true;                                                    //temp will be used to get the first available theme
            const formatThemes = Object.entries(Themes).map((theme) => {
                const themeName = theme[0];
                const themeColor = theme[1];

                if(budgetThemes.includes(themeName))
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
                    temp && setColor(themeName);
                    temp = false;
                    return (                         
                        <li onClick={(e) => handleColor(themeName, e)} key={themeName}>
                            <div className={styles.theme_dot} style={{backgroundColor: themeColor}}/>
                            <span>{themeName}</span>
                            {color === themeName && <img className={styles.checkmark} src={icons['checkmark']}/>}       {/* this is where i left off */}
                        </li>
                    )                     
                }
            });
            if(temp){                                                       //if there are no available themes
                alert('You cannot make any more budgets, consider deleting some of your existing budgets');
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
        getBudgets();
    }, []);

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

export default SelectTheme;