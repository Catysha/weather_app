import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import { useCityTime } from "../../../../hooks/useCityTime";
import { getWeatherIcon } from "../../../../utils/helpers/weatherHelpers";

interface Props {
    weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
    const time = useCityTime(weather.timezone);
    const iconId = getWeatherIcon(weather.current.weather_code);

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block__wrapper}>
                    <div className={s.this__temp}>{Math.floor(weather.current.temperature_2m)}°</div>
                    <div className={s.this__day__name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={iconId} />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>{time}</span>
                </div>
                <div className={s.this__city}>
                    Город: <span>{weather.city}</span>
                </div>
            </div>
        </div>
    );
};