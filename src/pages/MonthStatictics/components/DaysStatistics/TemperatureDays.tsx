import React from "react";
import s from "./TemperatureDays.module.scss";
import { DayCard } from "./DayCard";

export const TemperatureDays = () => {
    const days = [
        {
            day: 1,
            date: "2026-07-01",
            temp_max: 28,
            temp_min: 18,
            temp_avg: 23,
            weather_code: 0,
            icon_id: "sun",
        },
        {
            day: 2,
            date: "2026-07-02",
            temp_max: 26,
            temp_min: 17,
            temp_avg: 21,
            weather_code: 1,
            icon_id: "small_rain",
        },
        {
            day: 3,
            date: "2026-07-03",
            temp_max: 24,
            temp_min: 15,
            temp_avg: 20,
            weather_code: 2,
            icon_id: "cloud",
        },
        {
            day: 4,
            date: "2026-07-04",
            temp_max: 30,
            temp_min: 21,
            temp_avg: 25,
            weather_code: 0,
            icon_id: "sun",
        },
        {
            day: 5,
            date: "2026-07-05",
            temp_max: 27,
            temp_min: 19,
            temp_avg: 22,
            weather_code: 3,
            icon_id: "rain",
        },
        {
            day: 6,
            date: "2026-07-06",
            temp_max: 22,
            temp_min: 14,
            temp_avg: 18,
            weather_code: 1,
            icon_id: "small_rain",
        },
        {
            day: 7,
            date: "2026-07-07",
            temp_max: 25,
            temp_min: 16,
            temp_avg: 20,
            weather_code: 2,
            icon_id: "cloud",
        },
    ];

    return (
        <div className={s.days}>
            {days.map((_, index) => (
                <DayCard key={index} />
            ))}
        </div>
    );
};