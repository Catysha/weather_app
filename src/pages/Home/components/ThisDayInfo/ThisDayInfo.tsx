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
    const {current} = weather;
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(current.temperature_2m)}° - ощущается как ${Math.floor(current.apparent_temperature)}°`,

        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${pressureToMmHg(current.surface_pressure)} мм ртутного столба - ${getPressureCategory(current.surface_pressure)}`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${getPrecipitationByWeatherId(current.weather_code)}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.floor(current.wind_speed_10m)} м/с ${getWindDirection(current.wind_direction_10m)} - ${getWindSpeedCategory(current.wind_speed_10m)}`,
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