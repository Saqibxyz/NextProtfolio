"use client"

import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState()
    useEffect(() => {
        const initialWidth = window.innerWidth;
        setScreenSize(initialWidth);
        function getScreenSize() {
            return window.innerWidth;
        }
        function handleResize() {
            setScreenSize(getScreenSize)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        screenSize
    )
}

export default useScreenSize;