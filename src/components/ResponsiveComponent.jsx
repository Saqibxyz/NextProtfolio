"use client"

import useScreenSize from "./hooks/useScreenSize"

const ResponsiveComponent = ({ children }) => {
    const size = useScreenSize();



    return <>{children({ size })}</>

}

export default ResponsiveComponent