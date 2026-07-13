import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";

type CurrentWeather = {
    weather: Weather,
    isLoading: boolean,
    response: Response,
};

type Response = {
    status: number;
    message: string;
};

const initialState: CurrentWeather = {
    weather: {
        latitude: 0,
        longitude: 0,
        timezone: "",
        city: "",
        current: {
            temperature_2m: 0,
            apparent_temperature: 0,
            wind_speed_10m: 0,
            wind_direction_10m: 0,
            surface_pressure: 0,
            weather_code: 0,
            relative_humidity_2m: 0,
        },
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(
            state,
            action: PayloadAction<Weather>
        ) {
            state.isLoading = false;
            state.weather = action.payload;
            state.response = {
                status: 200,
                message: 'OK',
            };
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<Response>
        ) {
            state.isLoading = false;
            state.response = action.payload;
        },
    }
})

export default currentWeatherSlice.reducer;