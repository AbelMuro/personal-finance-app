import {useState, useEffect} from 'react';

export default function useMediaQuery(initialQuery) {
    const [matches, setMatches] = useState(false);
    const [mediaQuery, setMediaQuery] = useState(initialQuery);
  
    const handleChange = (media) => {
        setMatches(media.matches);
    };

    useEffect(() => {   
        const media = window.matchMedia(mediaQuery);
        setMatches(media.matches);
    
        media.addEventListener("change", handleChange);
        return () => {
            media.removeEventListener("change", handleChange);
        };
    }, [mediaQuery]);
  
    return [matches, setMediaQuery];
  }