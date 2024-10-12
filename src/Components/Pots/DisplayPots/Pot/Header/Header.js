import React, {useContext} from 'react';
import EditOrDeletePot from './EditOrDeletePot';
import Themes from '~/Themes'
import { PotsContext } from '@/Pot';
import * as styles from './styles.module.css';

function Header(){
    const {name, theme} = useContext(PotsContext);

    return(
        <div className={styles.pot_header}>
            <div className={styles.pot_title}>
                <div style={{backgroundColor: Themes[theme]}}/>
                <h2>
                    {name}
                </h2>
            </div>
            <EditOrDeletePot/>
        </div>
    )
}

export default Header;