import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DailyForecast {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    wind_speed_10m_max: number[];
}

export interface Forecast {
    latitude: number;
    longitude: number;
    timezone: string;
    daily: DailyForecast;
}

type ForecastWeather = {
    forecast: Forecast | null;
    isLoading: boolean;
    response: {
        status: number;
        message: string;
    };
};

const initialState: ForecastWeather = {
    forecast: null,
    isLoading: false,
    response: {
        status: 0,
        message: "",
    },
};

export const forecastWeatherSlice = createSlice({
    name: "forecastWeather",
    initialState,
    reducers: {
        fetchForecastWeather(state) {
            state.isLoading = true;
        },
        fetchForecastWeatherSuccess(state, action: PayloadAction<Forecast>) {
            state.isLoading = false;
            state.forecast = action.payload;
            state.response = {
                status: 200,
                message: "OK",
            };
        },
        fetchForecastWeatherError(
            state,
            action: PayloadAction<{ status: number; message: string }>
        ) {
            state.isLoading = false;
            state.response = action.payload;
        },
    },
});

export default forecastWeatherSlice.reducer;