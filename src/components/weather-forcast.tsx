import { useRecoilValue } from "recoil";
import { weatherForcastSelector } from "../store";
import { dayName } from "../conf/util";

export const WeatherForcast = () => {
  const forcastWeather = useRecoilValue(weatherForcastSelector);
  return (
    <div className="forecast">
      <h3>3-Day Forecast</h3>
      <div className="forecast-grid" id="forecast-grid">
        {forcastWeather.map((fw, index) => (
          <p key={fw.date}>
            <span className="weather-icon sm">
              <img src={fw.image} />
            </span>
            <br />
            {dayName[index]}: {fw.low} - {fw.high}°C, {fw.text_day}
          </p>
        ))}
      </div>
    </div>
  );
};
