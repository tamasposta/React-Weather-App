import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MoodImg from './components/MoodImg';
import MainWeatherData from './components/MainWeatherData';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
//import MainContainer from './components/MainContainer';

const theme = {
  colors: {
    body: 'linear-gradient(#492BA1, #8E78C8)',
    blockbg: 'rgba(0, 0, 0, 0.1)'
  },

  border: {
    brwhite: '2px solid white;',
    brradius: '10px'
  },
  
  mobile: '768px'
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className='mainContainer'>
          <GlobalStyles />
          <MainWeatherData />
          <HourlyForecast />
          <MoodImg />
          <DailyForecast />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App


  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: '955163c3dd7ea09295465a4fff838911',
  //   lat: '47.315999',
  //   lon: '21.355999',
  //   lang: 'en',
  //   unit: 'metric', // values are (metric, standard, imperial)
  // });
  // return (
  //   <ReactWeather
  //     isLoading={isLoading}
  //     errorMessage={errorMessage}
  //     data={data}
  //     lang="en"
  //     locationLabel="Debrecen"
  //     unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
  //     showForecast
  //   />
  // );