type MainData = {
  temp_max: number;
};

export type WeatherDataElement = {
  icon: string;
  description: string;
};

export type WindData = {
  speed: number;
};

export interface ForecastItem {
  dt_txt: string;
  main: MainData;
  weather: WeatherDataElement[];
  wind: WindData;
}

export interface ForecastData {
  list: ForecastItem[];
}

export interface DailyForecastProps {
  city: string;
  forecastData: ForecastData | null;
  isForecastDataLoading?: boolean;
}
