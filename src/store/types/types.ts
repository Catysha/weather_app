export type Weather = {
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    };
    dt: number;
    name: string;
    wind: {
        speed: number;
        deg: number;
    }

};