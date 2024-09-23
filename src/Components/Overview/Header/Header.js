import React, {useState, useEffect} from 'react';
import {useMediaQuery} from '~/Hooks';
import {useSelector} from 'react-redux';
import classnames from 'classnames';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';

//this is where i left off, i will need to apply the tablet styles to this component in styles.module.css

function Header(){
    const isMenuMimized = useSelector(state => state.menu.minimize);
    const [mediaQuery, setMediaQuery] = useState(mediaQueryMax);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    const chooseQueries = (className) => {
        return tablet ? styles[className] : classnames(styles[className], mediaQuery[className])
    }

    useEffect(() => {
        if(isMenuMimized)
            setMediaQuery(mediaQueryMin);
        else
            setMediaQuery(mediaQueryMax);
    }, [isMenuMimized])

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