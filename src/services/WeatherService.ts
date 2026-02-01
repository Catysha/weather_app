import axios , {AxiosResponse} from "axios";
import {Weather} from "../store/types/types";

export class WeatherService{
    static getCurrentWeather(city: string):
        Promise<AxiosResponse<Weather>>{
        return axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&
            appid=4412b2cf66f0c2bdd3ad89661dbb8d49`
        );
    }
}