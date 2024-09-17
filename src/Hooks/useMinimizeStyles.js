import {useState, useEffect} from 'react';
import useMediaQuery from './useMediaQuery.js';
import {useSelector} from 'react-redux';

function useMinimizeStyles() {
    const menuIsMinimized = useSelector(state => state.minimize);
    const [resize, setMediaQuery] = useMediaQuery('(max-width: 1430px)');

    useEffect(() => {
        if(menuIsMinimized)
            setMediaQuery('(max-width: 1235px)');
        else
            setMediaQuery('(max-width: 1430px)');

    }, [menuIsMinimized])

    return [resize];
}

export default useMinimizeStyles;