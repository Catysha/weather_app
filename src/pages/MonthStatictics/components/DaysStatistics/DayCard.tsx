import React from "react";
import s from "./DayCard.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

interface DayCardProps {
    day: number;
    date: string;
    temp_max: number;
    temp_min: number;
    temp_avg: number;
    weather_code: number;
    icon_id: string;
}

export const DayCard = ({day, date, temp_max, temp_min, temp_avg, weather_code, icon_id,}: DayCardProps) => {
    const dateObj = new Date(date);
    const dayNames = [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
    ];

    const monthNames = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
    ];

    const dayName = dayNames[dateObj.getDay()];
    const monthName = monthNames[dateObj.getMonth()];

    return (
        <div className={s.card}>
            <div className={s.day}>{dayName}</div>
            <div className={s.day__info}>
                {day} {monthName}
            </div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp__day}>{temp_max}°</div>
            <div className={s.temp__night}>{temp_min}°</div>
        </div>
    );
};