import { useRecoilCallback } from "recoil";
import { warnMessageAtom, weatherStore as weatherAtom } from "./index";
import { getForcastWeather } from "../apis/weatherApi";
import { DailyWeather, WeatherState } from "../models/weather";

export const useCallbacks = () => {
  const fetchForcast = useRecoilCallback(
    ({ set, snapshot }) =>
      async (city: string) => {
        const initState =
          snapshot.getLoadable<WeatherState>(weatherAtom).contents;
        try {
          set(weatherAtom, Object.assign({}, initState, { isLoading: true }));

          const daily: DailyWeather[] = (await getForcastWeather(
            city
          )) as DailyWeather[];

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
        } catch (ex) {
          console.log("catched::", ex);

          set(warnMessageAtom, "请检查城市名是否正确");
          set(weatherAtom, Object.assign({}, initState, { isLoading: false }));
        }
      }
  );

  return {
    fetchForcast,
  };
};
