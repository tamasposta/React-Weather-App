import axios, { AxiosResponse } from "axios"
import { MainWeatherDataProps, WeatherData } from "../MainWeatherData.types"
import { apiUrl } from "../../../utils/apiUrl"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import useGeolocation, { Coordinates } from "../../../hooks/useGeolocation"


export const useMainWeatherData = ({ city, setCity }: MainWeatherDataProps) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const iconUrl = `./images/icons/${weatherData?.weather?.[0]?.icon}.svg`
    const location: { coordinates?: Coordinates }  = useGeolocation()
    
    useEffect(() => {
        fetchData()
      }, [location, city])

    const fetchData = async (): Promise<void> => {
        try {
          const response: AxiosResponse<WeatherData> = await axios.get(
           city
            ? `${apiUrl}weather?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
            : `${apiUrl}weather?lat=${location.coordinates?.lat}&lon=${location.coordinates?.long}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
          )
          setWeatherData(response.data)
        } catch (error) {
          console.error(error)
        }
      } 

      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
      }
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        fetchData()
      }

      return { weatherData, iconUrl, handleSubmit, handleInputChange }
}