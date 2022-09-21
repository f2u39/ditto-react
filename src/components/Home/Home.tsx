import * as React from "react";
import * as ReactDOM from "react-dom";
import Timer from "./Timer";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Home() {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setTime(prevTime => prevTime + 10)
        }, 10)

        return () => clearInterval(interval)
    }, [])

    return (
        <>{time}</>
    )
}
