import React, {useState} from 'react';
import * as styles from './styles.module.css';

//this is where i left off, i need to implement the functionality for this component

function UploadImage(){
    const [image, setImage] = useState('');

    const handleImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
    }

    return(
        <>
            {image && <img className={styles.image} src={URL.createObjectURL(image)}/>}
            <label htmlFor='upload' className={styles.button}> 
                <input id='upload' type='file' name='image' onChange={handleImage} accept="image/png, image/jpeg"/>
                Upload Image (optional)
            </label>        
        </>

    )
}

export default UploadImage;