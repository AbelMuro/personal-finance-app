import React, {useState, useEffect} from 'react';

function Profile(){
    const [profile, setProfile] = useState(null);


    const getProfileData = async () => {
        const response = await fetch('http://localhost:4000/profile', {
            method: 'GET',
            credentials: 'include'
        });

        const profile = await response.json();
        console.log(profile);
    }

    useEffect(() => {
        getProfileData();
    }, [])

    return(
        <>
            Hello Profile
        </>
    )
}

export default Profile;