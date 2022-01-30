import React from 'react';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const ScrollToTop = () => {

    const { pathname } = useLocation()

    useEffect(() =>
    {
        window.scrollTo(0,0)
    }, [pathname])

    return (
        <>

        </>
    );
}

export default ScrollToTop;
