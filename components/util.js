import { useState, useCallback, useEffect } from 'react';

// TODO: improve this to not use deprecated stuff
// taken from https://github.com/vercel/next.js/discussions/14810#discussioncomment-61177
export const useWindowWidth = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

export const sameBasePath = (p1, p2) => {
    p1 = p1.charAt(0) === '/' ? p1.substring(1) : p1;
    p2 = p2.charAt(0) === '/' ? p2.substring(1) : p2;

    const p1EndIndex = p1.includes('/') ? p1.indexOf('/') + 1 : p1.length;
    const p2EndIndex = p2.includes('/') ? p2.indexOf('/') + 1 : p2.length;

    p1 = p1.substring(0, p1EndIndex);
    p2 = p2.substring(0, p2EndIndex);

    return p1 === p2;
};
