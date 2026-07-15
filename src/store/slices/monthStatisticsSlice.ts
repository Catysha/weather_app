import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MonthDay {
    day: number;

    date: string;

    temp_max: number;

    temp_min: number;

    temp_avg: number;

    weather_code: number;

    icon_id: string;
}

export interface MonthStatisticsData {
    days: MonthDay[];

    averageTemperature: number;

    maxTemperature: number;

    minTemperature: number;
}

type MonthStatisticsState = {
    statistics: MonthStatisticsData | null;

    isLoading: boolean;

    response: {
        status: number;
        message: string;
    };
};

const initialState: MonthStatisticsState = {
    statistics: null,

    isLoading: false,

    response: {
        status: 0,
        message: "",
    },
};

export const monthStatisticsSlice = createSlice({
    name: "monthStatistics",

    initialState,

    reducers: {
        fetchMonthStatistics(state) {
            state.isLoading = true;
        },

        fetchMonthStatisticsSuccess(
            state,
            action: PayloadAction<MonthStatisticsData>
        ) {
            state.isLoading = false;

            state.statistics = action.payload;

            state.response = {
                status: 200,
                message: "OK",
            };
        },

        fetchMonthStatisticsError(
            state,
            action: PayloadAction<{
                status: number;
                message: string;
            }>
        ) {
            state.isLoading = false;

            state.response = action.payload;
        },
    },
});

export default monthStatisticsSlice.reducer;