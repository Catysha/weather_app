import axios , {AxiosResponse} from "axios";

export class WeatherService{
    static getCurrentWeather(city: string): Promise<AxiosResponse<any>>{
        return axios.get('api.openweathermap.org/geo/1.0/direct?q=${city}&&appid=4412b2cf66f0c2bdd3ad89661dbb8d49')
    }
}