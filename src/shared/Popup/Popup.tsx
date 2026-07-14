import React from "react";
import s from "./Popup.module.scss";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Day } from "../../pages/Home/components/Days/Days";

interface Props {
    day: Day | null;
    isOpen: boolean;
    onClose: () => void;
}

export const Popup = ({ day, isOpen, onClose }: Props) => {
    if (!isOpen || !day) return null;

    const items: Item[] = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `День: ${day.temp_day} / Ночь: ${day.temp_night}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: day.info,
        },
    ];

    return (
        <>
            <div className={s.blur} onClick={onClose}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>{day.temp_day}</div>
                    <div className={s.day__name}>{day.day}</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id={day.icon_id} />
                    </div>
                    <div className={s.day__time}>
                        Дата: <span>{day.day_info}</span>
                    </div>
                </div>
                <div className={s.this__day_info_items}>
                    {items.map((item: Item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={s.close} onClick={onClose}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    );
};