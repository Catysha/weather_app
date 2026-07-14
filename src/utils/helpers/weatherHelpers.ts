import {precipitationByWeatherCode, pressureCategories, windDirections, windSpeedCategories} from "../constants/constants";

export function pressureToMmHg(pressure: number): number {
    return Math.round(pressure * 0.75006);
}

export function getPressureCategory(pressure: number): string {
    const category = pressureCategories.find(
        ({ min, max }) => pressure >= min && pressure <= max
    );

    return category?.label ?? "Неизвестно";
}

export function getPrecipitationByWeatherId(code: number): string {
    const category = precipitationByWeatherCode.find(
        ({ codes }) => (codes as readonly number[]).includes(code)
    );

    return category?.label ?? "Без осадков";
}

export function getWindDirection(deg: number): string {
    return windDirections[Math.round(deg / 45) % 8];
}

export function getWindSpeedCategory(speed: number): string {
    const category = windSpeedCategories.find(
        item => speed >= item.min && speed <= item.max
    );

    return category ? category.name : "Неизвестно";
}
export function getWeatherIcon(code: number): string {
    // WMO Weather interpretation codes
    const iconMap: { [key: number]: string } = {
        0: "sun",
        1: "sun",
        2: "small_rain_sun",
        3: "mainly_cloudy",
        45: "mainly_cloudy",
        48: "mainly_cloudy",
        51: "small_rain",
        53: "small_rain",
        55: "small_rain",
        61: "rain",
        63: "rain",
        65: "rain",
        71: "snow",
        73: "snow",
        75: "snow",
        77: "snow",
        80: "small_rain",
        81: "rain",
        82: "rain",
        85: "snow",
        86: "snow",
        95: "rain",
        96: "rain",
        99: "rain",
    };

    return iconMap[code] || "sun";
}