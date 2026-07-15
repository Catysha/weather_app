import axios from "axios";

export const weatherService = {
    async getCurrentWeather(lat: number, lon: number) {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude: lat,
                    longitude: lon,

                    current: [
                        "temperature_2m",
                        "apparent_temperature",
                        "weather_code",
                        "wind_speed_10m",
                        "wind_direction_10m",
                        "surface_pressure",
                        "relative_humidity_2m",
                    ],
                    wind_speed_unit: "ms",

                    timezone: "auto",
                },
            }
        );

        return response.data;
    },

    async getForecastWeather(lat: number, lon: number, days: number = 7) {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude: lat,
                    longitude: lon,
                    daily: [
                        "weather_code",
                        "temperature_2m_max",
                        "temperature_2m_min",
                        "weather_code",
                        "wind_speed_10m_max",
                    ],
                    wind_speed_unit: "ms",
                    timezone: "auto",
                    forecast_days: days,
                },
            }
        );

        return response.data;
    },

    async getMonthStatistics(
        latitude: number,
        longitude: number,
        startDate: string,
        endDate: string
    ) {
        const response = await axios.get(
            "https://archive-api.open-meteo.com/v1/archive",
            {
                params: {
                    latitude,
                    longitude,

                    daily: [
                        "weather_code",
                        "temperature_2m_max",
                        "temperature_2m_min",
                        "temperature_2m_mean",
                    ],

                    start_date: startDate,

                    end_date: endDate,

                    timezone: "auto",
                },
            }
        );

        return response.data;
    }
};