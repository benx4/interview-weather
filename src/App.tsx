import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <main>
        <div className="search-bar">
          <input
            type="text"
            id="location-input"
            placeholder="Enter city name..."
          />
          <button>Search</button>
        </div>
        <div className="weather-display">
          <div className="loader" id="loader">
            Loading...
          </div>
          <h2 id="city-name">City Name</h2>
          <p id="date">Date</p>
          <div className="weather-info">
            <div className="current-weather">
              <h3>Current Weather</h3>
              <p id="temp">Temperature: --°C</p>
              <p id="condition">Condition: --</p>
              <p id="humidity">Humidity: --%</p>
            </div>
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
                  Day 3: 22°C, Rainy{" "}
                  <i className="fas fa-cloud-showers-heavy"></i>
                </p>
                <p>
                  Day 4: 23°C, Partly Cloudy{" "}
                  <i className="fas fa-cloud-sun"></i>
                </p>
                <p>
                  Day 5: 25°C, Sunny <i className="fas fa-sun"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>© 2025 Weather App by xAI</p>
      </footer>
    </div>
  );
}

export default App;
