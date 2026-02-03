import {presipitationById, pressureCategories, windDirections, windSpeedCategories} from "../constants/constants";

export function pressureToMmHg(pressure: number): number {
    return Math.round(pressure * 0.75006);
}

export function getPressureCategory(pressure: number): string {
    const category = pressureCategories.find(
        ({ min, max }) => pressure >= min && pressure <= max
    );

    return category?.label ?? "Неизвестно";
}

export function getPrecipitationByWeatherId(id: number): string {
    const category = presipitationById.find(
        ({ range }) => id >= range[0] && id <= range[1]
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