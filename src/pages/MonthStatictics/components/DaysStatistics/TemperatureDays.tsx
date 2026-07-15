import React from "react";
import s from "./TemperatureDays.module.scss";
import { DayCard } from "./DayCard";

interface DayStats {
    day: number;
    date: string;
    temp_max: number;
    temp_min: number;
    temp_avg: number;
    weather_code: number;
    icon_id: string;
}

interface Props {
    days: DayStats[];
}

export const TemperatureDays = ({days}: Props) => {
    return (
        <div className={s.days}>
            {days.map((day) => (
                <DayCard
                    key={day.date}
                    day={day.day}
                    date={day.date}
                    temp_max={day.temp_max}
                    temp_min={day.temp_min}
                    temp_avg={day.temp_avg}
                    weather_code={day.weather_code}
                    icon_id={day.icon_id}
                />
            ))}
        </div>
    );
};