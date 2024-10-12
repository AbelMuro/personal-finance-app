import React, {useState, useContext, useEffect} from 'react';
import Themes from '~/Themes';
import {Budget} from '`/DisplayBudget';
import * as styles from './styles.module.css';
import { dropdownVariant } from './Variants';
import {useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import icons from './icons';

function SelectTheme() {
    const navigate = useNavigate();
    const {theme} = useContext(Budget);
    const [allThemes, setAllThemes] = useState();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(theme);

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleColor = (color) => {
        setColor(color)
    }

    const getBudgets = async () => {
        const response = await fetch('http://localhost:4000/get_budgets', {
            method: 'GET',        
            credentials: 'include',
        }); 

        if(response.status === 200){
            const budgets = await response.json();
            const budgetThemes = budgets.map(budget => budget.theme)
            const formatThemes = Object.entries(Themes).map((theme) => {
                const name = theme[0];
                const color = theme[1];

                if(budgetThemes.includes(name))
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
                    return (                         
                        <li onClick={() => handleColor(name)} key={name}>
                            <div className={styles.theme_dot} style={{backgroundColor: color}}/>
                            <span>{name}</span>
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
        getBudgets();
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

export default SelectTheme;