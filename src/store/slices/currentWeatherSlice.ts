import {createSlice} from "@reduxjs/toolkit";

type CurrentWeather = {
    weather: any,
    isLoading: boolean,
    response: Response,
};

type Response = {
    status: number;
    message: string;
};

const initialState = {
    weather: {},
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
        fetchCurrentWeatherSuccess(state, action: any) {
            /*state.weather = action ;*/
        },

    }
})