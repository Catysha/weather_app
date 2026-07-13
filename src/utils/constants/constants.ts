export interface PressureCategory {
    min: number;
    max: number;
    label: string;
}

export const pressureCategories: ReadonlyArray<PressureCategory> = [
    { min: 0, max: 980, label: "низкое" },
    { min: 981, max: 1030, label: "нормальное" },
    { min: 1031, max: Infinity, label: "высокое" },
] as const;

export const precipitationByWeatherCode = [
    { codes: [0, 1], label: "Ясно" },
    { codes: [2, 3], label: "Облачно" },
    { codes: [45, 48], label: "Туман" },
    { codes: [51, 53, 55, 56, 57], label: "Морось" },
    { codes: [61, 63, 65, 66, 67, 80, 81, 82], label: "Дождь" },
    { codes: [71, 73, 75, 77, 85, 86], label: "Снег" },
    { codes: [95, 96, 99], label: "Гроза" },
] as const;

export const windDirections = [
    "северный",
    "северо-восточный",
    "восточный",
    "юго-восточный",
    "южный",
    "юго-западный",
    "западный",
    "северо-западный",
];
export const windSpeedCategories = [
    { min: 0, max: 0.2, name: 'штиль' },
    { min: 0.3, max: 1.5, name: 'тихий' },
    { min: 1.6, max: 3.3, name: 'легкий' },
    { min: 3.4, max: 5.4, name: 'слабый' },
    { min: 5.5, max: 7.9, name: 'умеренный' },
    { min: 8.0, max: 10.7, name: 'свежий' },
    { min: 10.8, max: 13.8, name: 'сильный' },
    { min: 13.9, max: 17.1, name: 'крепкий' },
    { min: 17.2, max: 20.7, name: 'очень сильный' },
    { min: 20.8, max: 24.4, name: 'шторм' },
    { min: 24.5, max: 28.4, name: 'сильный шторм' },
    { min: 28.5, max: Infinity, name: 'ураган' }
];