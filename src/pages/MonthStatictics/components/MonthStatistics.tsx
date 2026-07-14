import React, { useState } from "react";
import s from "./MonthStatistics.module.scss";
import { ChooseMonth } from "./ChooseMonth/ChooseMonth";
import {TemperatureStatistics} from "./TemperatureStatistics/TemperatureStatistics";

interface Props { }

export const MonthStatistics = (props: Props) => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

    return (
        <div className={s.monthStatistics}>
            <div className={s.month__wrapper}>
                <ChooseMonth selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
                <TemperatureStatistics />
            </div>
        </div>
    );
};