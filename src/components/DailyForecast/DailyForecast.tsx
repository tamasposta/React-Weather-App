import { StyledDailyForecastData, CurrentDate, ForecastTable, DailyForecastTableElement, DailyForecastDate, WeatherIcon, WindDiv, WindImg } from "../styles/DailyForecast.styled"
import { ForecastItem, DailyForecastProps } from "./DailyForecast.types"
import { PropagateLoader } from "react-spinners"
import { getDate } from "../../utils/getDate"
import { theme } from "../../utils/themes"

const DailyForecast = ({ forecastData, isForecastDataLoading }: DailyForecastProps) => {
  const currentDate = getDate()

  return (
    <StyledDailyForecastData>
      <div>
      {isForecastDataLoading && <PropagateLoader color={theme.colors.white} size={20} />}
        {forecastData
          ? (
            <>
              <CurrentDate>
                <p>Ma</p>
                <p>{currentDate}</p>
              </CurrentDate>
              <h2>5 napos előrejelzés</h2>
              <ForecastTable>
                {forecastData?.list.map((listItem: ForecastItem, index: number) => {
                  const iconUrl = `./images/icons/${listItem?.weather?.[0]?.icon}.svg`
                  if ((index + 1) % 8 === 0) {
                    return (
                      <DailyForecastTableElement>
                        <DailyForecastDate>{listItem?.dt_txt.slice(5, 11)}</DailyForecastDate>
                        <WeatherIcon src={iconUrl} alt="weatherIcon" />
                        <h3>{Math.round(listItem?.main?.temp_max)}°C</h3>
                        <h4>{listItem?.weather?.[0]?.description}</h4>
                        <WindDiv>
                          <WindImg src="./images/wind.svg" alt="wind" />
                          <h4> &nbsp; {Math.round(listItem?.wind?.speed)} km/h</h4>
                        </WindDiv>
                      </DailyForecastTableElement>
                    )
                  }
                  return null
                })}
              </ForecastTable>
            </>
          )
          : (
            <p>Kezdje el a keresést.</p>
          )}
      </div>
    </StyledDailyForecastData>
  )
}

export default DailyForecast