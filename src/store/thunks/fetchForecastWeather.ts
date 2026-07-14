import { AppDispatch } from "../store";
import { GeocodingService } from "../../services/GeocodingService";
import { weatherService } from "../../services/WeatherService";
import { forecastWeatherSlice } from "../slices/forecastWeatherSlice";

export const fetchForecastWeather =
    (payload: string, days: number = 14) => async (dispatch: AppDispatch) => {
        try {
            dispatch(forecastWeatherSlice.actions.fetchForecastWeather());

            const city = await GeocodingService.getCity(payload);

            if (!city) {
                throw new Error("Город не найден");
            }

            const forecast = await weatherService.getForecastWeather(
                city.latitude,
                city.longitude,
                days
            );

            dispatch(
                forecastWeatherSlice.actions.fetchForecastWeatherSuccess(forecast)
            );
        } catch (error) {
            console.error(error);
            dispatch(
                forecastWeatherSlice.actions.fetchForecastWeatherError({
                    status: 0,
                    message: error instanceof Error ? error.message : "Неизвестная ошибка",
                })
            );
        }
    };