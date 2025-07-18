"use client";

import weatherConditions from "../../../weather-conditions.json";
import { useEffect, useState } from "react";

interface WeatherCondition {
    day: string;
    night: string;
    icon: number;
}

interface WeatherConditions {
    [code: string]: WeatherCondition;
}

interface WeatherResponse {
    current: {
        temp_f: number;
        condition: {
            code: number;
            text: string;
            icon: number;
        };
        is_day: number;
    };
}

function Weather() {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);

    useEffect(() => {
        fetch(
            "https://api.weatherapi.com/v1/current.json?key=78d567521670472985d235048252206&q=10002&aqi=no"
        )
            .then((res) => res.json())
            .then((data) => setWeather(data));
    }, []);

    if (!weather) return null;

    const condition = (weatherConditions as WeatherConditions)[
        weather.current.condition.code.toString()
    ];
    const conditionText = weather.current.is_day
        ? condition.day
        : condition.night;

    return (
        <div>
            <h1 className="text-white text-6xl font-normal">
                {Math.round(weather.current.temp_f)}° F
            </h1>
            <h1 className="text-white/70 font-normal text-2xl">
                {conditionText}
            </h1>
        </div>
    );
}

export default Weather;
