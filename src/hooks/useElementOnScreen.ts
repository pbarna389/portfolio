import { useState, useEffect, useRef} from 'react'

export const useElementOnScreen = (options:any) => {
    const elementRef = useRef(null);
    const [ isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries:any) => {
        const [ entry ] = entries;
        setIsVisible(entry.isInterSecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [elementRef, options])
  
    return (
        [elementRef, isVisible]
    );
}