import { useRecoilState, useRecoilValue } from "recoil";
import { weatherForcastSelector, weatherId } from "../store";
import { dayName } from "../conf/util";
import moment from "moment";

export const WeatherForcast = () => {
  const forcastWeather = useRecoilValue(weatherForcastSelector);
  const [_, setWid] = useRecoilState(weatherId);
  return (
    <div className="forecast">
      <h3>三日天气</h3>
      <div className="forecast-grid">
        {forcastWeather.map((fw, index) => (
          <div
            className="item"
            key={fw.date}
            onClick={() => {
              setWid(index);
            }}
          >
            <div>{moment(new Date(fw.date)).format("YYYY年MM月DD日")}</div>

            <div className="weather-icon sm">
              <img src={fw.image} />
            </div>
            <div>
              {dayName[index]}: {fw.low} - {fw.high}°C, {fw.text_day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
