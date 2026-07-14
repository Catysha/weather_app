import { AppDispatch } from "../store";
import { GeocodingService } from "../../services/GeocodingService";
import { weatherService } from "../../services/WeatherService";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";

export const fetchCurrentWeather =
    (city: string, country?: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeather());

            const cityData = await GeocodingService.getCity(city, country);

            if (!cityData) {
                throw new Error(`Город "${city}" не найден`);
            }

            const weather = await weatherService.getCurrentWeather(
                cityData.latitude,
                cityData.longitude
            );
            weather.city = cityData.name;
            weather.timezone = cityData.timezone;

            dispatch(
                currentWeatherSlice.actions.fetchCurrentWeatherSuccess(weather)
            );
        } catch (error) {
            console.error("Ошибка загрузки текущей погоды:", error);
            dispatch(
                currentWeatherSlice.actions.fetchCurrentWeatherError({
                    status: 0,
                    message: error instanceof Error ? error.message : "Неизвестная ошибка",
                })
            );
        }
    };