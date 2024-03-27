import { WeatherDataElement, WindData } from "../DailyForecast/DailyForecast.types"

type MainData = {
  temp: number
  feels_like: number
  humidity: number
}
export interface WeatherData {
  name: string
  main: MainData
  weather: WeatherDataElement[]
  wind: WindData
}

export interface UseMainWeatherDataProps {
  city: string
}
export interface MainWeatherDataProps extends UseMainWeatherDataProps {
  setCity: React.Dispatch<React.SetStateAction<string>>
  weatherData?: WeatherData | null
  fetchWeatherData: () => Promise<void>
  fetchForecastData: () => Promise<void>
  isWeatherDataLoading?: boolean
}

export interface SearchInputProps extends MainWeatherDataProps {
  fetchWeatherData: () => Promise<void>
}