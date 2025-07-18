"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Clock() {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => setTime(dayjs()), 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <h1 className="text-white text-6xl font-normal">
                {time.format("hh:mm")}
            </h1>
            <h1 className="text-white/70 font-normal text-2xl">
                {time.format("ddd MMM D")}
            </h1>
        </>
    );
}

export default Clock;
