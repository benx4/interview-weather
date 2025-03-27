type RealTimeWeatherInfo = {
  image: string;
  text: string;
  code: string;
  temperature: string;
};
export type WeatherState = {
  realtime: RealTimeWeatherInfo;
  isLoading: boolean;
  forcast: DailyWeather[];
};

export type RealtimeWeather = {
  results: [
    {
      now: RealTimeWeatherInfo;
    }
  ];
};
export type DailyWeather = {
  image: string;
  date: string;
  text_day: string;
  code_day: string;
  text_night: string;
  code_night: string;
  high: string;
  low: string;
  rainfall: string;
  precip: string;
  wind_direction: string;
  wind_direction_degree: string;
  wind_speed: string;
  wind_scale: string;
  humidity: string;
};

export type ForcastWeather = {
  results: [
    {
      daily: DailyWeather[];
    }
  ];
};
