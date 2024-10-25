import React, {useState, useMemo, forwardRef} from 'react';
import MessageBox from '~/Common/Components/MessageBox';
import Themes from '~/Themes';
import {useDispatch, useSelector} from 'react-redux';
import {useMenuMinMaxStyles} from '~/Hooks';
import * as styles from './styles.module.css';
import * as mediaQueryMin from './mediaQueryMin.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css';
import icons from './icons';

function Pots(){    
    const pots = useSelector(state => state.overview.data.pots);
    const dispatch = useDispatch();
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);
    const [total, setTotal] = useState(0);

    const handlePots = () => {
        dispatch({type: 'CHANGE_LINK', payload: 'pots'});
    }

    const fourPots = useMemo(() => {
        const firstFour = [];
        let total = 0;
        pots.forEach((pot, i) => {
            if(i < 4)
                firstFour.push(pot);
            total += pot.savings;
        })
        setTotal(total);
        return firstFour;
    }, [pots])

    return(
        <article className={chooseQueries('pots')}>
            <h1 className={chooseQueries('pots_title')}>
                Pots
            </h1>
            <button className={chooseQueries('pots_button')} onClick={handlePots}>
                See Details
                <div className={chooseQueries('pots_arrow')}/>
            </button>
            <div className={chooseQueries('pots_total')}>
                <img className={styles.pots_icon} src={icons['dollarSign']}/>
                <h2>
                    Total Saved
                </h2>
                <MessageBox 
                    total={total}
                    Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                        return (
                            <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                ${total.toLocaleString('en-US',{
                                    maximumFractionDigits: 0
                                })}
                                {children}
                            </strong>
                        )
                    })}/>
            </div>
            {
                fourPots.map((pot) => {
                    const name = pot.name
                    const theme = pot.theme;
                    const savings = pot.savings;
                    const potId = pot.potId;

                    return(
                        <div className={chooseQueries('pots_savings')} key={potId}>
                            <div className={styles.pots_color} style={{backgroundColor: Themes[theme]}}/>
                            <h2>
                                {name}
                            </h2>
                            <MessageBox 
                                total={savings} 
                                Component={forwardRef(({children, onMouseEnter, onMouseLeave}, ref) => {
                                    return(
                                        <strong onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={ref}>
                                            ${savings.toLocaleString('en-US',{
                                                maximumFractionDigits: 0
                                            })}
                                            {children}
                                        </strong>        
                                    ) 
                                })}/>
                        </div>
                    )
                })
            }
        </article>
    )
}

export default Pots;