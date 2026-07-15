import { AppDispatch, RootState } from "../store";

import { weatherService } from "../../services/WeatherService";

import { monthStatisticsSlice } from "../slices/monthStatisticsSlice";

import { getWeatherIcon } from "../../utils/helpers/weatherHelpers";

export const fetchMonthStatistics =
    (selectedMonth: string) =>
        async (
            dispatch: AppDispatch,
            getState: () => RootState
        ) => {
            try {
                dispatch(
                    monthStatisticsSlice.actions.fetchMonthStatistics()
                );

                const weather =
                    getState().currentWeatherSliceReducer.weather;

                const latitude = weather.latitude;

                const longitude = weather.longitude;

                const [year, month] = selectedMonth
                    .split("-")
                    .map(Number);

                const now = new Date();

                const isCurrentMonth =
                    year === now.getFullYear() &&
                    month === now.getMonth() + 1;

                const startDate = `${year}-${String(month).padStart(
                    2,
                    "0"
                )}-01`;

                const endDate = isCurrentMonth
                    ? now.toISOString().split("T")[0]
                    : new Date(year, month, 0)
                        .toISOString()
                        .split("T")[0];

                const data =
                    await weatherService.getMonthStatistics(
                        latitude,
                        longitude,
                        startDate,
                        endDate
                    );

                const days = data.daily.time.map(
                    (date: string, index: number) => ({
                        day: new Date(date).getDate(),

                        date,

                        temp_max: data.daily.temperature_2m_max[index],

                        temp_min: data.daily.temperature_2m_min[index],

                        temp_avg: data.daily.temperature_2m_mean[index],

                        weather_code: data.daily.weather_code[index],

                        icon_id: getWeatherIcon(
                            data.daily.weather_code[index]
                        ),
                    })
                );

                const averageTemperature =
                    days.reduce(
                        (sum: number, day: any) =>
                            sum + day.temp_avg,
                        0
                    ) / days.length;

                const maxTemperature = Math.max(
                    ...days.map((day: any) => day.temp_max)
                );

                const minTemperature = Math.min(
                    ...days.map((day: any) => day.temp_min)
                );

                dispatch(
                    monthStatisticsSlice.actions.fetchMonthStatisticsSuccess(
                        {
                            days,

                            averageTemperature,

                            maxTemperature,

                            minTemperature,
                        }
                    )
                );
            } catch (error) {
                dispatch(
                    monthStatisticsSlice.actions.fetchMonthStatisticsError(
                        {
                            status: 500,

                            message:
                                error instanceof Error
                                    ? error.message
                                    : "Ошибка",
                        }
                    )
                );
            }
        };