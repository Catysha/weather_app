import React from "react";
import s from "./DayCard.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

export const DayCard = () => {
    return (
        <div className={s.card}>
            <div className={s.day}>Пн</div>
            <div className={s.day__info}>14 июл</div>
            <div className={s.img}>
                <GlobalSvgSelector id="sun" />
            </div>
            <div className={s.temp__day}>28°</div>
            <div className={s.temp__night}>18°</div>
        </div>
    );
};