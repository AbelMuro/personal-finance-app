import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

function Header(){
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <header className={chooseQueries('header')}>
            <h1 className={chooseQueries('header_title')}>
                Overview
            </h1>   
            <div className={chooseQueries('header_balance')}>
                <h2>
                    Current Balance
                </h2>
                $4,836.00
            </div>  
            <div className={chooseQueries('header_detail')}>
                <h2>
                    Income
                </h2>
                $3,814.25
            </div> 
            <div className={chooseQueries('header_detail')}>
                <h2>
                    Expenses  
                </h2>
                $1,700.50
            </div>    
        </header>
    )
}

export default Header;