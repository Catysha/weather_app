import axios from "axios";

interface CityParams {
    name: string;
    count: number;
    language: string;
    format: string;
    country?: string;
}

export const GeocodingService = {
    async getCity(city: string, country?: string) {
        try {
            const params: CityParams = {
                name: city,
                count: 10,
                language: "ru",
                format: "json",
            };

            if (country) {
                params.country = country;
            }

            const response = await axios.get(
                "https://geocoding-api.open-meteo.com/v1/search",
                { params }
            );

            const results = response.data.results || [];

            if (!results.length) {
                console.error(`Город "${city}" не найден в API`);
                return null;
            }

            let result = results[0];
            if (country) {
                result = results.find((r: any) =>
                    r.country_code?.toLowerCase() === country.toLowerCase()
                ) || results[0];
            }

            console.log(`Найден город: ${city}`, {
                name: result.name,
                latitude: result.latitude,
                longitude: result.longitude,
                timezone: result.timezone,
                country: result.country,
            });

            return result;
        } catch (error) {
            console.error(`Ошибка при поиске города "${city}":`, error);
            return null;
        }
    },
};