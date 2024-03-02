import { StyledDailyForecastData, CurrentDate, ForecastTable } from "../styles/DailyForecast.styled"
import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import useGeolocation, { Coordinates } from "../../hooks/useGeolocation"
import { ForecastItem, ForecastData, DailyForecastProps } from "./DailyForecast.types"
import { PropagateLoader } from "react-spinners"
import { getDate } from "../../utils/getDate"
import { apiUrl } from "../../utils/apiUrl"

// ENNEK IS KÜLÖN CUSTOM HOOK

const DailyForecast = ({ city }: DailyForecastProps) => {
  const location: { coordinates?: Coordinates } = useGeolocation()
  const [forecastData, setForecastData] = useState<ForecastData | null>(null)
  const [currentDate] = useState<string>(getDate())
  const [color] = useState<string>("#ffffff")

  useEffect(() => {
    fetchData()
  }, [location, city])

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ForecastData> = await axios.get<ForecastData>
        (
        city
          ? `${apiUrl}forecast?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
          : `${apiUrl}forecast?lat=${location.coordinates?.lat}&lon=${location.coordinates?.long}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
        )
      setForecastData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledDailyForecastData>
      <div>
        {forecastData
          ? (
            <>
              <CurrentDate>
                <p>Ma</p>
                <p className="actual-date">{currentDate}</p>
              </CurrentDate>
              <h2>5 napos előrejelzés</h2>
              <ForecastTable>
                {forecastData?.list.map((listItem: ForecastItem, index: number) => {
                  const iconUrl = `./images/icons/${listItem?.weather?.[0]?.icon}.svg`
                  if ((index + 1) % 8 === 0) {
                    return (
                      <div className="daily-forecast-table-element">
                        <h4 className="daily-forecast-date">{listItem?.dt_txt.slice(5, 11)}</h4>
                        <img src={iconUrl} alt="weatherIcon" className="daily-forecast-img" />
                        <h3 className="daily-forecast-upper-degree">{Math.round(listItem?.main?.temp_max)}°C</h3>
                        <h4 className="daily-forecast-lower-degree">{listItem?.weather?.[0]?.description}</h4>
                        <div className="windDiv"><img src="./images/wind.svg" alt="szél" className="windImg" /> <h4 className="daily-forecast-lower-degree"> &nbsp; {Math.round(listItem?.wind?.speed)} km/h</h4>
                        </div>
                      </div>
                    )
                  }
                  return null
                })}
              </ForecastTable>
            </>
          )
          : (
              <PropagateLoader color={color} size={20}/>     
          )}
      </div>
    </StyledDailyForecastData>
  )
}

export default DailyForecast