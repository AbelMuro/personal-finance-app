import React, {useState, useEffect, useRef} from 'react';
import * as styles from './styles.module.css';

function MessageBox({Component}) {
    const [hover, setHover] = useState(false);
    const messageBoxRef = useRef();

    const handleMouseEnter = () => {
        console.log('enter');
        setHover(true);
    }

    const handleMouseLeave = () => {
        console.log('leave');
        setHover(false);    
    }

    const followMouse = (event) => {
        const follower = messageBoxRef.current;
        follower.style.left = `${event.pageX}px`;
        follower.style.top = `${event.pageY}px`;
    }

    useEffect(() => {
        if(hover)
            document.addEventListener('mousemove', followMouse);
        else
            document.removeEventListener('mousemove', followMouse);

        return () => {
            document.removeEventListener('mousemove', followMouse);
        }
    }, [hover])

    return (
        <Component onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hover && 
                <div className={styles.messageBox} ref={messageBoxRef}>
                    {total.toLocaleString('en-US',{
                        maximumFractionDigits: 0
                    })}
                </div>
            }            
        </Component> 
    )
}

export default MessageBox;