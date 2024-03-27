import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { WeatherData } from '../components/MainWeatherData/MainWeatherData.types'
import { apiUrl } from '../utils/apiUrl'
import useGeolocation, { Coordinates } from './useGeolocation'
import { ForecastData } from '../components/DailyForecast/DailyForecast.types'

export const useHome = ({ city }:any) => {
    const [isWeatherDataLoading, setIsWeatherDataLoading] = useState<boolean>(false)
    const [isForecastDataLoading, setIsForecastDataLoading] = useState<boolean>(false)
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const [forecastData, setForecastData] = useState<ForecastData | null>(null)
    const location: { coordinates?: Coordinates }  = useGeolocation()

    const fetchWeatherData = async (): Promise<void> => {
        try { setIsWeatherDataLoading(true)
            const response: AxiosResponse<WeatherData> = await axios.get(
                city
                    ? `${apiUrl}weather?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
                    : `${apiUrl}weather?lat=${location.coordinates?.lat}&lon=${location.coordinates?.long}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
            )
            setWeatherData(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsWeatherDataLoading(false)
        }
    }

    const fetchForecastData = async (): Promise<void> => {
        try { setIsForecastDataLoading(true)
            const response: AxiosResponse<ForecastData> = await axios.get<ForecastData>
                (
                    city
                        ? `${apiUrl}forecast?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
                        : `${apiUrl}forecast?lat=${location.coordinates?.lat}&lon=${location.coordinates?.long}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
                )
            setForecastData(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsForecastDataLoading(false)
        }
    }

    return {
        fetchWeatherData,
        fetchForecastData,
        weatherData,
        forecastData,
        isWeatherDataLoading,
        isForecastDataLoading
    }
}
