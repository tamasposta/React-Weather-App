import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MainWeatherData from './components/MainWeatherData';
import DailyForecast from './components/DailyForecast';
import { useEffect, useContext } from "react";
import { GeocodingProvider, GeocodingContext } from "./context/GeocodingContext";

const theme = {
  colors: {
    body: 'linear-gradient(#2dd6fc, #4342ca)',
    blockbg: 'rgba(30, 50, 150, 0.6)'
  },

  border: {
    brwhite: '2px solid white;',
    brradius: '10px'
  },

  mobile: '1024px'
}

const App = () => {
  const { setGeocodingInfo } = useContext(GeocodingContext);

  useEffect(() => {
    // Helymeghatározás engedélyezése
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Helymeghatározás sikeres, további lépések
          setGeocodingInfo(latitude, longitude); // Geolokációs adatok továbbítása a Context-nek
        },
        (error) => {
          console.error("Helymeghatározás sikertelen:", error.message);
        }
      );
    } else {
      console.error("A böngésző nem támogatja a helymeghatározást");
    }
  }, [setGeocodingInfo]); // Figyeljük a setGeocodingInfo változót a dependenciák között

  return (
    <GeocodingProvider>
      <ThemeProvider theme={theme}>
        <>
          <div className='mainContainer'>
            <GlobalStyles />
            <MainWeatherData />
            <DailyForecast />
          </div>
        </>
      </ThemeProvider>
    </GeocodingProvider>
  )
}

export default App