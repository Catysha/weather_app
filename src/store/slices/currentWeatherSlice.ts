import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Weather} from "../types/types";
import {AxiosResponse} from "axios";

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
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0,
        },
        dt: 0,
        timezone: 0,
        name: " ",
        wind: {
            speed: 0,
            deg: 0,
        },
        weather: [
            {
                id: 0,
            }
        ]
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
            action: PayloadAction<AxiosResponse<Weather>>
        ) {
            state.isLoading = false;
            state.weather = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        },
    }
})

export default currentWeatherSlice.reducer;