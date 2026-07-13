import axios from "axios";

export const GeocodingService = {
    async getCity(city: string) {
        const response = await axios.get(
            "https://geocoding-api.open-meteo.com/v1/search",
            {
                params: {
                    name: city,
                    count: 1,
                    language: "ru",
                    format: "json",
                },
            }
        );

        return response.data.results[0];
    },
};