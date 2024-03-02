import { useState } from "react"
import MainWeatherData from "../components/MainWeatherData/MainWeatherData"
import DailyForecast from "../components/DailyForecast/DailyForecast"

const Home = () => {
    const [city, setCity] = useState<string>('')

  return (
    <>
        <MainWeatherData city={city} setCity={setCity}/>
        <DailyForecast city={city} />
    </>
  )
}

export default Home