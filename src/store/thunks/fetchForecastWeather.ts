import { AppDispatch } from "../store";
import { GeocodingService } from "../../services/GeocodingService";
import { weatherService } from "../../services/WeatherService";
import { forecastWeatherSlice } from "../slices/forecastWeatherSlice";

export const fetchForecastWeather =
    (city: string, days?: number, country?: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(forecastWeatherSlice.actions.fetchForecastWeather());

            const cityData = await GeocodingService.getCity(city, country);

            if (!cityData) {
                throw new Error(`Город "${city}" не найден`);
            }

            const forecast = await weatherService.getForecastWeather(
                cityData.latitude,
                cityData.longitude,
                days || 14
            );

            dispatch(
                forecastWeatherSlice.actions.fetchForecastWeatherSuccess(forecast)
            );
        } catch (error) {
            console.error("Ошибка загрузки прогноза:", error);
            dispatch(
                forecastWeatherSlice.actions.fetchForecastWeatherError({
                    status: 0,
                    message: error instanceof Error ? error.message : "Неизвестная ошибка",
                })
            );
        }
    };