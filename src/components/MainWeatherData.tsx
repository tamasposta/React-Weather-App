import { StyledMainWeatherData } from "./styles/MainWeatherData.styled"
import axios from "axios"
import { useEffect, useState } from "react";

// export default function MainWeatherData() {
//   return (
//     <StyledMainWeatherData>
//           <img src="src/images/sun+rain.png" alt="" className="actual-weather-img" />
//           <h1 className="location">Debrecen</h1>
//           <h3 className="actual-degree">5°C</h3>
//           <p className="max-min-degree">Max: 8°C | Min: 1°C</p>
//     </StyledMainWeatherData>
//   )
// }

const MainWeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
       // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
        `https://api.openweathermap.org/data/2.5/weather?q=Debrecen&units=metric&lang=hu&appid=955163c3dd7ea09295465a4fff838911`
      );
      setWeatherData(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };


  return (
    <StyledMainWeatherData>
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form> */}
      {weatherData 
      ? (
        <>
          <img src="src/images/sun+rain.png" alt="" className="actual-weather-img" />
          <h1 className="location">{weatherData.name}</h1>
          <h3> {Math.round(weatherData.main.temp)}°C</h3>
          <p>Leírás: {weatherData.weather[0].description}</p>
          <p>Szél: {Math.round(weatherData.wind.speed)} m/s</p>
          {/* <p>Hőérzet: {weatherData.main.feels_like}°C</p>
          <p>Szél: {weatherData.wind.speed} m/s</p>
          <p>Páratartalom : {weatherData.main.humidity}%</p> */}
        </>
      ) 
      : (
        <p>Adatok betöltés alatt...</p>
      )}
    </div>
    </StyledMainWeatherData>
  );
};

export default MainWeatherData;

// Feladat: Block formátumban megjeleníteni az img-et dinamikusan, a helyzetet, a hőmérsékletet és a min-max hőmérsékletet