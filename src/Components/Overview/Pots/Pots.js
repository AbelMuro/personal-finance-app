import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import icons from './icons';

//this is where i left off, i will need to work on the tablet styles for this component
function Pots(){    
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
        <article className={chooseQueries('pots')}>
            <h1 className={chooseQueries('pots_title')}>
                Pots
            </h1>
            <button className={chooseQueries('pots_button')}>
                See Details
                <div className={chooseQueries('pots_arrow')}/>
            </button>
            <div className={chooseQueries('pots_total')}>
                <img className={styles.pots_icon} src={icons['dollarSign']}/>
                <h2>
                    Total Saved
                </h2>
                <strong>
                    $850
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}>
                <div className={styles.pots_color} style={{backgroundColor: '#277C78'}}/>
                <h2>
                    Savings
                </h2>
                <strong>
                    $159
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}>
                <div className={styles.pots_color} style={{backgroundColor: '#82C9D7'}}/>
                <h2>
                    Gift
                </h2>
                <strong>
                    $40
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}> 
                <div className={styles.pots_color} style={{backgroundColor: '#626070'}}/>
                <h2>
                    Concert Ticket
                </h2>
                <strong>
                    $110
                </strong>
            </div>
            <div className={chooseQueries('pots_savings')}>
                <div className={styles.pots_color} style={{backgroundColor: '#F2CDAC'}}/>
                <h2>
                    New Laptop
                </h2>
                <strong>
                    $159
                </strong>
            </div>
        </article>
    )
}

export default Pots;