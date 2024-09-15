import React, {useState, useEffect} from 'react';
import Header from './Header';
import * as styles from './styles.module.css';

function Budget() {
    const [profile, setProfile] = useState(null);


    const getProfileData = async () => {
        const response = await fetch('http://localhost:4000/profile', {
            method: 'GET',
            credentials: 'include'
        });

        const results = await response.json();
        console.log(results.profile.data)
        //setProfile(profile);
    }

    useEffect(() => {
        getProfileData();
    }, [])

    return(
        <section className={styles.container}>
            <Header/>
        </section>
    )
}

export default Budget;