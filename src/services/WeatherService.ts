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
};