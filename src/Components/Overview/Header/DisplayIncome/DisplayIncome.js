import React, {useState, useEffect, forwardRef, memo} from 'react';
import { ClipLoader } from 'react-spinners';
import MessageBox from '~/Common/Components/MessageBox';
import { useNavigate } from 'react-router-dom';
import * as styles from './styles.module.css';

function DisplayIncome({className}) {
    const [income, setIncome] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getIncome = async () => {
        setLoading(true);
        const response = await fetch('https://finance-app-server.netlify.app/get_income', {
            method: 'GET',
            credentials: 'include'
        })

        if(response.status === 200){
            const result = await response.json();
            const income = result.income;
            setIncome(income);       
        }
        else if(response.status === 401){
            const message = await response.text();
            console.log(message);
            navigate('/');
            setTimeout(() => {
                alert('You have been logged out, please log in again')
            }, 1000)
        }
        else{
            const message = await response.text();
            console.log(message);
            setTimeout(() => {
                alert('Internal server error occured, please try again later')
            }, 500)
        }

        setLoading && setLoading(false);
    }

    useEffect(() => {
        getIncome();
        document.addEventListener('database-update', getIncome);
        return () => {
            document.removeEventListener('database-update', getIncome)
        }
    }, [])

    return(
        <div className={className}>
            <h2>
                Income
            </h2>
            {loading ? <ClipLoader size='35px' color='black' className={styles.loading}/> : 
                <MessageBox 
                    total={income} 
                    Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                        return(
                            <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                ${income.toLocaleString('en-US',{
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                                {children}
                            </strong>
                        )
                    })}/>}
        </div> 
    )
}

export default memo(DisplayIncome);