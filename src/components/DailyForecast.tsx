import { StyledDailyFC } from "./styles/DailyForecast.styled"
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import useGeolocation, { Coordinates } from "../hooks/useGeolocation";

interface ForecastItem {
  dt_txt: string;
  main: {
    temp_max: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastData {
  list: ForecastItem[];
}

const getDate = (): string => {
  const today = new Date();
  const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Oktober", "November", "December"];
  const monthIndex = today.getMonth();
  const monthName = monthNames[monthIndex];
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}. ${monthName}. ${date}`;
}

const DailyForecast: React.FC<{ city: string }> = ({ city }) => {
  const location: { coordinates?: Coordinates } = useGeolocation();
  const [forecastData, setForecastData] = useState<ForecastData | any>(null);
  const [currentDate] = useState<string>(getDate());

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ForecastData> = await axios.get<any>
        (
        city
          ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
          : `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coordinates?.lat}&lon=${location.coordinates?.long}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
        );
      setForecastData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location, city]);

  return (
    <StyledDailyFC>
      <div>
        {forecastData
          ? (
            <>
              <div id="current-date">
                <p>Ma</p>
                <p className="actual-date">{currentDate}</p>
              </div>
              <h2>5 napos előrejelzés</h2>
              <div id="daily-forecast-table">
                {forecastData?.list.map((listItem: ForecastItem, index: number) => {
                  const iconUrl = `./src/images/icons/${listItem?.weather?.[0]?.icon}.svg`;
                  if ((index + 1) % 8 === 0) {
                    return (
                      <div className="daily-forecast-table-element">
                        <h4 className="daily-forecast-date">{listItem?.dt_txt.slice(5, 11)}</h4>
                        <img src={iconUrl} alt="weatherIcon" className="daily-forecast-img" />
                        <h3 className="daily-forecast-upper-degree">{Math.round(listItem?.main?.temp_max)}°C</h3>
                        <h4 className="daily-forecast-lower-degree">{listItem?.weather?.[0]?.description}</h4>
                        <div className="windDiv"><img src="./src/images/wind.svg" alt="szél" className="windImg" /> <h4 className="daily-forecast-lower-degree"> &nbsp; {Math.round(listItem?.wind?.speed)} km/h</h4>
                        </div>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </>
          )
          : (
            <p>Adatok betöltés alatt!</p>
          )}
      </div>
    </StyledDailyFC>
  )
}

export default DailyForecast