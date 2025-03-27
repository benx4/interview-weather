export const WeatherForcast = () => {
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid" id="forecast-grid">
        <p>
          Day 1: 26°C, Sunny <i className="fas fa-sun"></i>
        </p>
        <p>
          Day 2: 24°C, Cloudy <i className="fas fa-cloud"></i>
        </p>
        <p>
          Day 3: 22°C, Rainy <i className="fas fa-cloud-showers-heavy"></i>
        </p>
      </div>
    </div>
  );
};
