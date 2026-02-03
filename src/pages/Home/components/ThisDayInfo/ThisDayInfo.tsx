import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from '../../../../assets/images/Cloud image.png';
import {ThisDayItem} from "./ThisDayItem";
import {Weather} from "../../../../store/types/types";
import {
    getPrecipitationByWeatherId,
    getPressureCategory,
    getWindDirection,
    getWindSpeedCategory,
    pressureToMmHg
} from "../../../../utils/helpers/weatherHelpers";
interface Props {
    weather: Weather;
}

 export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

export const ThisDayInfo = ({weather}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,

        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${pressureToMmHg(weather.main.pressure)} мм ртутного столба - ${getPressureCategory(weather.main.pressure)}`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${getPrecipitationByWeatherId(weather.weather[0].id)}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.floor(weather.wind.speed)} м/с ${getWindDirection(weather.wind.deg)} - ${getWindSpeedCategory(weather.wind.speed)}`,
        },
    ];
    return (<div className={s.this__day__info}>
        <div className={s.this__day__info__items}>
            {items.map((item: Item) => (
                <ThisDayItem key={item.icon_id} item={item} />
            ))}
        </div>
        <img src={cloud} className={s.cloud_img} alt="cloud"/>
    </div>)
}