import { AppDispatch } from "../store";
import { GeocodingService } from "../../services/GeocodingService";
import { weatherService } from "../../services/WeatherService";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";

export const fetchCurrentWeather =
    (payload: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeather());

            const city = await GeocodingService.getCity(payload);

            if (!city) {
                throw new Error("Город не найден");
            }

            const weather = await weatherService.getCurrentWeather(
                city.latitude,
                city.longitude
            );
            weather.city = city.name;

            dispatch(
                currentWeatherSlice.actions.fetchCurrentWeatherSuccess(weather)
            );
        } catch (error) {
            console.error(error);
            dispatch(
                currentWeatherSlice.actions.fetchCurrentWeatherError({
                    status: 0,
                    message: error instanceof Error ? error.message : "Неизвестная ошибка",
                })
            );
        }
    };