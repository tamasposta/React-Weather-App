export interface WeatherData {
    name: string
    main: {
      temp: number
      feels_like: number
      humidity: number
    }
    weather: {
      description: string
      icon: string
    }[]
    wind: {
      speed: number
    }
  }
  
export interface MainWeatherDataProps {
    city: string
    setCity: (city: string) => void
  }

  // itt alakítsam át