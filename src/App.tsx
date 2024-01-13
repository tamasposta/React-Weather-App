import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MoodImg from './components/MoodImg';
import MainWeatherData from './components/MainWeatherData';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

const theme = {
  colors: {
    header: '#ebfbff',
    body: 'linear-gradient(#492BA1, #8E78C8)',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainWeatherData />
        <MoodImg />
        <HourlyForecast />
        <DailyForecast />
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