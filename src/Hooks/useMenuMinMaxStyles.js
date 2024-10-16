import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '~/Hooks';
import classnames from 'classnames';

function useMenuMinMaxStyles(minQuery,  maxQuery, styles) {
    const menuIsMinimized = useSelector(state => state.menu.minimize);
    const [mediaQueries, setMediaQuery] = useState(maxQuery);
    const [tablet] = useMediaQuery('(max-width: 850px)');

    useEffect(() => {
        if(menuIsMinimized)
            setMediaQuery(minQuery);
        else
            setMediaQuery(maxQuery);

    }, [menuIsMinimized])

    return [(className) => tablet ? styles[className] : classnames(mediaQueries[className], styles[className])]
}

export default useMenuMinMaxStyles;