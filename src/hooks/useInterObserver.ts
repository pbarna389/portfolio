import React, { useState, useEffect, useRef, MutableRefObject} from 'react'

export const useInterObserver = (state:boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [shown, setShown] = useState<boolean>(false);
    const elementRef:MutableRefObject<HTMLElement | any> = useRef();

    const callbackFunction = (entries:any) => {
        const [ entry ] = entries;
        setState(entry.isIntersecting);
        setShown(true);
        console.log(entry)
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction);
        if (elementRef) observer.observe(elementRef.current);

    }, [elementRef])


    return (
        [elementRef]
    );
}