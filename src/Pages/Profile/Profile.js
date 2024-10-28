import React from 'react';
import NavigationBar from './NavigationBar';
import {Outlet} from 'react-router-dom';
import * as styles from './styles.module.css';

function Profile(){
    return(
        <main className={styles.container}>
            <NavigationBar/>
            <Outlet/>
        </main>
    )
}

export default Profile;