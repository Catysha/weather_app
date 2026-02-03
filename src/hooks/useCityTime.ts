import { useEffect, useState } from "react";
import {getLocalCityTime} from "../utils/helpers/dateHelpers";

export function useCityTime(timezone: number): string {
    const [time, setTime] = useState(() =>
        getLocalCityTime(timezone)
    );

    useEffect(() => {
        setTime(getLocalCityTime(timezone));

        const interval = setInterval(() => {
            setTime(getLocalCityTime(timezone));
        }, 1000); // тикает каждую секунду

        return () => clearInterval(interval);
    }, [timezone]);

    return time;
}