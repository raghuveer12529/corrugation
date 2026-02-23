import { useState, useEffect } from 'react';

/**
 * Custom hook to track window size
 * Returns current window width and height
 * Automatically updates on window resize with cleanup
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to prevent memory leaks
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
