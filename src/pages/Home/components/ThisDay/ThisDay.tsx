import React from "react";
import s from "./ThisDay.module.scss";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {Weather} from "../../../../store/types/types";
import { useCityTime } from "../../../../hooks/useCityTime";

interface Props {
    weather: Weather;
}

export const ThisDay = ({weather}: Props) => {
    const time = useCityTime(weather.timezone);
    return (<div className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.top__block__wrapper}>
                <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                <div className={s.this__day__name}>Сегодня</div>
            </div>
            <GlobalSvgSelector id="sun"/>
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>
                Время: <span>{time}</span>
            </div>
            <div className={s.this__city}>
                Город: <span>{weather.name}</span>
            </div>
        </div>
    </div>)
}