import React, { useState } from "react";
import s from "./MonthStatistics.module.scss";
import { ChooseMonth } from "./ChooseMonth/ChooseMonth";

interface Props { }

export const MonthStatistics = (props: Props) => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

    return (
        <div className={s.monthStatistics}>
            <ChooseMonth selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
            <div>
            </div>
        </div>
    );
};