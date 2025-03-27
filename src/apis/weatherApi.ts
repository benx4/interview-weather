import axios from "axios";
import { apiUrlMapping, privateKey } from "../conf/apiConf";
import {
  RealtimeWeather,
  ForcastWeather,
  DailyWeather,
} from "../models/weather";

export async function getRealTimeWeather(city: string) {
  const response = await axios.get<RealtimeWeather>(
    apiUrlMapping["realTimeWeather"]
      .replace("|api-key|", privateKey)
      .replace("|city|", city)
  );
  const result = response.data.results[0].now;
  return result;
}

export async function getForcastWeather(city: string): Promise<DailyWeather[]> {
  const response = await axios.get<ForcastWeather>(
    apiUrlMapping["weatherForcast3Days"]
      .replace("|api-key|", privateKey)
      .replace("|city|", city)
  );

  const result = response.data.results[0].daily;
  console.log("result::", result);
  return result;
}
