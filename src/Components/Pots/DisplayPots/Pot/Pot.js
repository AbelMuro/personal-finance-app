import React, {createContext} from 'react';
import Header from './Header';
import PotData from './PotData';
import AddMoney from './AddMoney';
import * as styles from './styles.module.css';

export const PotsContext = createContext();

function Pot({name, target, theme, potId, savings}) {
    
    return(
        <PotsContext.Provider value={{
            name, 
            target,
            theme,
            potId,
            savings
        }}>
            <section className={styles.pot}>
                <Header/>
                <PotData/>
                <AddMoney/>
            </section>
        </PotsContext.Provider>
    )
}

export default Pot;