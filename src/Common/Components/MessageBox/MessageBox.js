import React, {useState, useEffect, useRef} from 'react';
import * as styles from './styles.module.css';

function MessageBox({total, Component}) {
    const [hover, setHover] = useState(false);
    const messageBoxRef = useRef();
    const containerRef = useRef();

    const handleMouseEnter = () => {
        const scrollWidth = containerRef.current.scrollWidth;
        const clientWidth = containerRef.current.clientWidth;
        if(scrollWidth > clientWidth)
            setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);    
    }

    const followMouse = (e) => {
        const follower = messageBoxRef.current;
        follower.style.left = `${e.pageX}px`;
        follower.style.top = `${e.pageY}px`;
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
        <Component onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={containerRef}>
            {hover &&
                <div className={styles.messageBox} ref={messageBoxRef}>
                    {total.toLocaleString('en-US',{
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </div>
            }            
        </Component> 
    )
}

export default MessageBox;