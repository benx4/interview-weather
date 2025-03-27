import { atom, selector } from "recoil";
import { DailyWeather, WeatherState } from "../models/weather";
import { defaultToday } from "../conf/util";

export const weatherStore = atom<WeatherState>({
  key: "weatherState",
  default: {
    realtime: {
      image: new URL(`../assets/99.png`, import.meta.url).href,
      text: "--",
      code: "99",
      temperature: "--",
    },
    isLoading: false,

    forcast: [],
  },
});

export const keywordAtom = atom<string>({
  key: "keyword",
  default: "shanghai",
});

export const weatherId = atom<number>({
  key: "weather_id",
  default: 0,
});

export const warnMessageAtom = atom({
  key: "warn_message",
  default: "",
});

export const realtimeWeatherSelector = selector({
  key: "realtime_weather",
  get: ({ get }) => {
    let realtime = get(weatherStore).realtime;
    return realtime;
  },
});

export const weatherForcastSelector = selector<DailyWeather[]>({
  key: "weather_forcaset",
  get: ({ get }) => {
    return get(weatherStore).forcast || [];
  },
});

export const firstWeatherForcastSelector = selector<DailyWeather>({
  key: "today_weather",
  get: ({ get }) => {
    const weathers = get(weatherStore).forcast;
    const id = get(weatherId);
    return !weathers || weathers.length === 0 ? defaultToday : weathers[id];
  },
});

export const loadingStatusSelector = selector<boolean>({
  key: "loading_state",
  get: ({ get }) => {
    return get(weatherStore).isLoading;
  },
});
