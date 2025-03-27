import { useRecoilCallback } from "recoil";
import { weatherStore as weatherAtom } from "./index";
import { getForcastWeather, getRealTimeWeather } from "../apis/weatherApi";
import { DailyWeather, ForcastWeather } from "../models/weather";

export const useCallbacks = () => {
  const fetchRealtime = useRecoilCallback(
    ({ set, snapshot }) =>
      async (city: string) => {
        const initState = snapshot.getLoadable(weatherAtom).contents;
        set(weatherAtom, Object.assign({}, initState, { isLoading: true }));
        const realtime = await getRealTimeWeather(city);
        realtime.image = new URL(
          `../assets/${realtime.code}.png`,
          import.meta.url
        ).href;

        set(
          weatherAtom,
          Object.assign({}, initState, { realtime, isLoading: false })
        );
      }
  );

  const fetchForcast = useRecoilCallback(
    ({ set, snapshot }) =>
      async (city: string) => {
        const initState = snapshot.getLoadable(weatherAtom).contents;
        set(weatherAtom, Object.assign({}, initState, { isLoading: true }));
        const daily: DailyWeather[] = await getForcastWeather(city);
        daily.forEach(
          (d) =>
            (d.image = new URL(
              `../assets/${d.code_day}.png`,
              import.meta.url
            ).href)
        );

        set(
          weatherAtom,
          Object.assign({}, initState, { forcast: daily, isLoading: false })
        );
      }
  );

  return {
    fetchRealtime,
    fetchForcast,
  };
};
