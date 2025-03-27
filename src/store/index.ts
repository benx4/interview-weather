import { atom, selector } from "recoil";
import { WeatherState } from "../models/weather";

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
  default: "",
});

export const realtimeWeatherSelector = selector({
  key: "realtime_weather",
  get: ({ get }) => {
    let realtime = get(weatherStore).realtime;
    console.log("image::", realtime.image);
    return realtime;
  },
});

export const weatherForcastSelector = selector({
  key: "weather_forcaset",
  get: ({ get }) => {
    return get(weatherStore).forcast;
  },
});
export const loadingStatusSelector = selector({
  key: "loading_state",
  get: ({ get }) => {
    return get(weatherStore).isLoading;
  },
});
