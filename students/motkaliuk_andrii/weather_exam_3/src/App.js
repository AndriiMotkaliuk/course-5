import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import clear_sky_image from './images/01_clear_sky.jpg';
import few_clouds_image from './images/02_few_clouds.jpg';
import scattered_clouds_image from './images/03_scattered_clouds.jpg';
import broken_clouds_image from './images/04_broken-clouds.jpg';
import shower_rain_image from './images/09_shower_rain.jpg';
import rain_image from './images/10_rain.jpg';
import thunderstorm_image from './images/11_thunderstorm.jpg';
import snow_image from './images/13_snow.jpg';
import mist_image from './images/50_mist.jpg';





function App() {

  const [query, setQuery] = useState({ q: 'kyiv' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location."

      toast.info('Fetching weather for ' + message)

      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          console.log(data)
          toast.success(`Successfuly fetched weather for ${data.name}, ${data.country}`)

          setWeather(data);
        });
    };

    fetchWeather();
  }, [query, units]);

  // const getBackgraundImage = () => {
  //   console.log(weather)
  // }

  const getBackgroundImage = () => {
    if (!weather) return
    console.log(weather.icon)

    switch (weather.icon) {
      case '01n':
      case '01d':
        return clear_sky_image;
      case '02d':
        return few_clouds_image;
      case '03n':
        return scattered_clouds_image;
      case '04n':
      case '04d':
        return broken_clouds_image;
      case '09d':
        return shower_rain_image;
      case '10d':
        return rain_image;
      case '11d':
        return thunderstorm_image;
      case '13d':
        return snow_image;
      case '50d':
        return mist_image;
      default:
        return few_clouds_image;
    }
  };

  // const formatBackground = () => {

  //   const iconCode = weather.weather[0]?.icon;
  //   const backgroundUrl = getBackgroundImage(iconCode);

  //   return `url(${backgroundUrl})`;
  // };


  return (

    <div style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', padding: '3vh 10px' }}  >
      <div className={`mx-auto max-w-screen-md py-5 px-5 md:px-32 bg-gradient-to-br from-gray-700/70 to-gray-500/80  h-fit shadow-xl shadow-gray-400 rounded-2xl`}>

        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="Hourly forecast" items={weather.hourly} />
            <Forecast title="Daily forecast" items={weather.daily} />
          </div>
        )}

        <ToastContainer autoClose={1000} theme='colored' newestOnTop={true} />

      </div>
    </div >

  );
}

export default App;
