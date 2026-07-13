export interface Weather {
    latitude: number;
    longitude: number;

    timezone: string;

    city: string;
    current: {
        temperature_2m: number;
        apparent_temperature: number;
        wind_speed_10m: number;
        wind_direction_10m: number;
        surface_pressure: number;
        weather_code: number;
        relative_humidity_2m: number;
    };
}