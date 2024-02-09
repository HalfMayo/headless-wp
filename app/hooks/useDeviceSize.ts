'use client'

import { useState, useEffect } from "react";

export default function useDeviceSize() {
    const [height, setHeight] = useState<number>();
    const [width, setWidth] = useState<number>();

    function setSize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        setSize();
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, [])

    return [height, width]
}