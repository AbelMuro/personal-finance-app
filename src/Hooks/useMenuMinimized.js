import {useEffect} from 'react';
import useMediaQuery from './useMediaQuery.js';
import {useSelector} from 'react-redux';

function useMenuMinimized(minQuery,  maxQuery) {
    const menuIsMinimized = useSelector(state => state.minimize);
    const [resize, setMediaQuery] = useMediaQuery(maxQuery);

    useEffect(() => {
        if(menuIsMinimized)
            setMediaQuery(minQuery);
        else
            setMediaQuery(maxQuery);

    }, [menuIsMinimized])

    return [resize];
}

export default useMenuMinimized;