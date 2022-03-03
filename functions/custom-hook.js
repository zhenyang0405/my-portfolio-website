import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({width: undefined, height: undefined});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const getWindowDimensions = () => {
                const { innerWidth: width, innerHeight: height } = window;
                setWindowDimensions({
                    width: width,
                    height: height
                })
            }
        }

        const handleResize = () => {
            getWindowDimensions();
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return windowDimensions;
}