import { useRecoilValue } from "recoil";
import { firstWeatherForcastSelector } from "../store";
import moment from "moment";

export const CurrentWeather = () => {
  const realtime = useRecoilValue(firstWeatherForcastSelector);
  return (
    <div className="current-weather">
      <h3>{moment(new Date(realtime.date)).format("YYYY年MM月DD日")}</h3>
      <p className="weather-icon">
        <img src={realtime.image} />
      </p>
      <p>日间天气:&nbsp;{realtime.text_day}</p>
      <p>夜间天气:&nbsp;{realtime.text_day}</p>
      <p>
        气温: {realtime.low}°C ~ {realtime.high}°C
      </p>

      <p>湿度: {realtime.humidity}%</p>
      <p>降水概率: {realtime.precip}</p>
    </div>
  );
};
