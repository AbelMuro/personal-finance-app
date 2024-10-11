import React, {createContext} from 'react';
import EditOrDeletePot from './EditOrDeletePot';
import Themes from '~/Themes';
import * as styles from './styles.module.css';

export const PotsContext = createContext();

function Pot({name, target, theme}) {
    
    return(
        <PotsContext.Provider value={{
            name, 
            target,
            theme
        }}>
            <section className={styles.pot}>
                <div className={styles.pot_header}>
                    <div className={styles.pot_title}>
                        <div style={{backgroundColor: Themes[theme]}}/>
                        <h2>
                            {name}
                        </h2>
                    </div>
                    <EditOrDeletePot/>
                </div>
            </section>
        </PotsContext.Provider>

    )
}

export default Pot;