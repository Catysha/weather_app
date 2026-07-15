import React from "react";
import s from "./TemperatureStatistics.module.scss";

interface Props {
    average?: number;
    max?: number;
    min?: number;
}

export const TemperatureStatistics = ({
                                          average,
                                          max,
                                          min,
                                      }: Props) => {
    return (
        <div className={s.statsContainer}>
            <div className={s.statCard}>
                <div className={s.statLabel}>
                    Средняя температура
                </div>

                <div className={s.statValue}>
                    {average !== undefined
                        ? `${average.toFixed(1)}°`
                        : "--°"}
                </div>

                <div className={s.statUnit}>
                    за период
                </div>
            </div>

            <div className={s.statCard}>
                <div className={s.statLabel}>
                    Максимальная температура
                </div>

                <div className={s.statValue}>
                    {max !== undefined
                        ? `${max.toFixed(1)}°`
                        : "--°"}
                </div>

                <div className={s.statUnit}>
                    самый жаркий день
                </div>
            </div>

            <div className={s.statCard}>
                <div className={s.statLabel}>
                    Минимальная температура
                </div>

                <div className={s.statValue}>
                    {min !== undefined
                        ? `${min.toFixed(1)}°`
                        : "--°"}
                </div>

                <div className={s.statUnit}>
                    самый холодный день
                </div>
            </div>
        </div>
    );
};