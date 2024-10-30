import React, {useState, useContext, useEffect, useRef} from 'react';
import {Budget} from '`/DisplayBudget';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion'
import {useNavigate} from 'react-router-dom';
import { dropdownVariant } from './Variants';
import icons from './icons';

function SelectCategory() {
    const navigate = useNavigate();
    const budgetData = useContext(Budget);
    const initialCategory = budgetData.category;
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(initialCategory);
    const allCategoriesRef = useRef(['Entertainment', 'Bills', 'Groceries', 'Dining Out', 'Transportation', 'Personal Care', 'Education', 'General']);
    const [allCategories, setAllCategories] = useState([]);

    const openArrowStyles = {
        transform: 'rotate(180deg)'
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleCategory = (category) => {
        setCategory(category)
    }

    const getBudgets = async () => {
        const response = await fetch('https://finance-app-server-5991576c358c.herokuapp.com/get_budgets', {
            method: 'GET',        
            credentials: 'include',
        }); 

        if(response.status === 200){
            const budgets = await response.json();
            const budgetCategories = budgets.map(budget => budget.category)
            const formatCategories = allCategoriesRef.current.map((category) => {
                if(budgetCategories.includes(category) && category !== initialCategory)
                    return (
                        <li style={{opacity: 0.1, pointerEvents: 'none'}} key={category}>
                            {category}
                        </li>
                    )
                else{
                    return (                         
                        <li onClick={() => handleCategory(category)} key={category}>
                            {category}
                        </li>
                    )  
                }

            });
            setAllCategories(formatCategories);
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
    },[])

    return(
        <fieldset className={styles.container} onClick={handleOpen}>
            <strong>
                Budget Category
            </strong>
            <div className={styles.selectbox}>
                {category}
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
                            {allCategories}
                    </motion.ul>}
            </AnimatePresence>
            <input type='hidden' name='category' value={category}/>
        </fieldset>
    )
}

export default SelectCategory;