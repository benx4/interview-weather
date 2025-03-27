export const privateKey: string = "SsiztPhseb2M68zrp";

export const apiUrlMapping: {
  [key: string]: string;
} = {
  realTimeWeather:
    "/weather/v3/weather/now.json?key=|api-key|&location=|city|&language=zh-Hans&unit=c",
  weatherForcast3Days:
    "/weather/v3/weather/daily.json?key=|api-key|&location=|city|&language=zh-Hans&unit=c&start=0&days=3",
};
