import React from 'react';
import {useMenuMinMaxStyles} from '~/Hooks';
import Header from './Header';
import DisplayPots from './DisplayPots';
import * as styles from './styles.module.css';
import * as mediaQueryMax from './mediaQueryMax.module.css'
import * as mediaQueryMin from './mediaQueryMin.module.css'

function Pots() {
    const [chooseQueries] = useMenuMinMaxStyles(mediaQueryMin, mediaQueryMax, styles);

    return(
        <section className={chooseQueries('container')}>
            <Header/>
            <DisplayPots/>
        </section>
    )
}

export default Pots;