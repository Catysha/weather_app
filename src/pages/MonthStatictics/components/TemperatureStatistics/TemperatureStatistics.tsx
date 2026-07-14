import React from "react";
import s from "./TemperatureStatistics.module.scss";

interface Props { }

export const TemperatureStatistics = (props: Props) => {
    return (
        <div className={s.statsContainer}>
            <div className={s.statCard}>
                <div className={s.statLabel}>Средняя температура</div>
                <div className={s.statValue}>10°</div>
                <div className={s.statUnit}>за месяц</div>
            </div>

            <div className={s.statCard}>
                <div className={s.statLabel}>Максимальная температура</div>
                <div className={s.statValue}>10°</div>
                <div className={s.statUnit}>за месяц</div>
            </div>

            <div className={s.statCard}>
                <div className={s.statLabel}>Минимальная температура</div>
                <div className={s.statValue}>10°</div>
                <div className={s.statUnit}>за месяц</div>
            </div>
        </div>
    );
};