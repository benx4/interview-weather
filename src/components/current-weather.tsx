import { useRecoilValue } from "recoil";
import { realtimeWeatherSelector } from "../store";

export const CurrentWeather = () => {
  const realtime = useRecoilValue(realtimeWeatherSelector);
  return (
    <div className="current-weather">
      <h3>Current Weather</h3>

      <p id="humidity" className="weather-icon">
        <img src={realtime.image} />
      </p>
      <p id="condition">{realtime.text}</p>
      <p id="temp">Temperature: {realtime.temperature}°C</p>
    </div>
  );
};
