import React from "react";
import s from "./Days.module.scss";
import { Day } from "./Days";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

interface Props {
    day: Day;
    onClick: () => void;
}

export const Card = ({ day, onClick }: Props) => {
    return (
        <div className={s.card} onClick={onClick}>
            <div className={s.day}>{day.day}</div>
            <div className={s.day__info}>{day.day_info}</div>
            <div className={s.img}>
                {<GlobalSvgSelector id={day.icon_id} />}
            </div>
            <div className={s.temp__day}>{day.temp_day}</div>
            <div className={s.temp__night}>{day.temp_night}</div>
            <div className={s.info}>{day.info}</div>
        </div>
    );
};