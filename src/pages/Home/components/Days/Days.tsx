import React, { useState } from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import { Popup } from "../../../../shared/Popup/Popup";
import { useCustomSelector } from "../../../../hooks/store";
import { getWeatherIcon } from "../../../../utils/helpers/weatherHelpers";

interface Props { }

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {
    const [daysCount, setDaysCount] = useState(7);
    const [selectedDay, setSelectedDay] = useState<Day | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { forecast, isLoading } = useCustomSelector(
        (state) => state.forecastWeatherSliceReducer
    );

    const parseForecastData = (): Day[] => {
        if (!forecast?.daily) return [];

        const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        const monthNames = [
            "янв", "фев", "мар", "апр", "май", "июн",
            "июл", "авг", "сен", "окт", "ноя", "дек",
        ];

        return forecast.daily.time.map((dateStr: string, index: number) => {
            const date = new Date(dateStr);
            const dayName =
                index === 0
                    ? "Сегодня"
                    : index === 1
                        ? "Завтра"
                        : dayNames[date.getDay()];

            return {
                day: dayName,
                day_info: `${date.getDate()} ${monthNames[date.getMonth()]}`,
                icon_id: getWeatherIcon(forecast.daily.weather_code[index]),
                temp_day: `${Math.round(forecast.daily.temperature_2m_max[index])}°`,
                temp_night: `${Math.round(forecast.daily.temperature_2m_min[index])}°`,
                info: `Ветер ${Math.round(forecast.daily.wind_speed_10m_max[index])} м/с`,
            };
        });
    };

    const handleCardClick = (day: Day) => {
        setSelectedDay(day);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedDay(null);
    };

    const days = parseForecastData();
    const filteredDays = days.slice(0, daysCount);

    if (isLoading) {
        return <div style={{ padding: "20px" }}>Загрузка прогноза...</div>;
    }

    return (
        <>
            <Tabs daysCount={daysCount} setDaysCount={setDaysCount} />
            <div className={s.days}>
                {filteredDays.map((day: Day) => (
                    <Card
                        day={day}
                        key={day.day + day.day_info}
                        onClick={() => handleCardClick(day)}
                    />
                ))}
            </div>
            <Popup day={selectedDay} isOpen={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
};