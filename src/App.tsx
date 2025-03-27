import { useRecoilValue } from "recoil";
import "./App.css";
import { CurrentWeather } from "./components/current-weather";
import { SearchBox } from "./components/search-box";
import { WeatherForcast } from "./components/weather-forcast";
import { loadingStatusSelector } from "./store";
import moment from "moment";

function App() {
  const isLoading = useRecoilValue(loadingStatusSelector);
  const today = moment(Date.now()).format("YYYY年MM月DD日");
  return (
    <div className="container">
      <header>
        <h1>天气预报</h1>
      </header>
      <main>
        <SearchBox />
        <div className="weather-display">
          {isLoading ? (
            <div className="loader" id="loader">
              Loading...
            </div>
          ) : (
            <>
              <h2 id="city-name">City Name</h2>
              <p id="date">{today}</p>
              <div className="weather-info">
                <CurrentWeather />
                <WeatherForcast />
              </div>
            </>
          )}
        </div>
      </main>
      <footer>
        <p>© 2025 Weather App by Benjamin</p>
      </footer>
    </div>
  );
}

export default App;
