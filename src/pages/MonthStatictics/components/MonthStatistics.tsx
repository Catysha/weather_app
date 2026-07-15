import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./MonthStatistics.module.scss";

import { ChooseMonth } from "./ChooseMonth/ChooseMonth";
import { TemperatureStatistics } from "./TemperatureStatistics/TemperatureStatistics";
import { TemperatureDays } from "./DaysStatistics/TemperatureDays";

import { RootState, AppDispatch } from "../../../store/store";
import { fetchMonthStatistics } from "../../../store/thunks/fetchMonthStatistics";

interface Props {}

export const MonthStatistics = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const [selectedMonth, setSelectedMonth] = useState(
        new Date().toISOString().slice(0, 7)
    );

    const statistics = useSelector(
        (state: RootState) =>
            state.monthStatisticsSliceReducer.statistics
    );

    const isLoading = useSelector(
        (state: RootState) =>
            state.monthStatisticsSliceReducer.isLoading
    );

    const { latitude, longitude } = useSelector(
        (state: RootState) =>
            state.currentWeatherSliceReducer.weather
    );

    useEffect(() => {
        if (latitude !== 0 && longitude !== 0) {
            dispatch(
                fetchMonthStatistics(
                    selectedMonth
                )
            );
        }
    }, [
        dispatch,
        selectedMonth,
        latitude,
        longitude,
    ]);


    return (
        <div className={s.monthStatistics}>
            <div className={s.month__wrapper}>
                <ChooseMonth
                    selectedMonth={selectedMonth}
                    onMonthChange={setSelectedMonth}
                />

                <TemperatureStatistics
                    average={
                        statistics?.averageTemperature
                    }
                    max={
                        statistics?.maxTemperature
                    }
                    min={
                        statistics?.minTemperature
                    }
                />
            </div>

            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <TemperatureDays
                    days={statistics?.days ?? []}
                />
            )}
        </div>
    );
};