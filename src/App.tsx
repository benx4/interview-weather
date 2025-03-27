import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { CurrentWeather } from "./components/current-weather";
import { SearchBox } from "./components/search-box";
import { WeatherForcast } from "./components/weather-forcast";
import { loadingStatusSelector, warnMessageAtom } from "./store";
import moment from "moment";
import Loading from "./components/loading";
import WarnBox from "./components/warn-box";

function App() {
  const isLoading = useRecoilValue(loadingStatusSelector);
  const today = moment(Date.now()).format("YYYY年MM月DD日");
  const [warnMessage, setWarnMessage] = useRecoilState(warnMessageAtom);
  return (
    <div className="container">
      {isLoading ? <Loading /> : null}
      {warnMessage ? (
        <WarnBox
          message={warnMessage}
          onDismiss={() => {
            setWarnMessage("");
          }}
        />
      ) : null}
      <header>
        <h1>天气预报</h1>
      </header>
      <main>
        <SearchBox />
        <div className="weather-display">
          <p id="date">{today}</p>
          <div className="weather-info">
            <CurrentWeather />
            <WeatherForcast />
          </div>
        </div>
      </main>
      <footer>
        <p>© 2025 Weather App by Benjamin</p>
        <i>* 请注意，由于测试接口，只能查询国内城市三天数据</i>
      </footer>
    </div>
  );
}

export default App;
