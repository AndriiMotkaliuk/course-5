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
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import rainy_image from './images/rainy_image.jpg';



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

  const getBackgraundImage = () => {
    console.log(weather)
  }

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700'


    return 'from-yellow-700 to-orange-700'
  }

  return (

    <div style={{ backgroundImage: `url(${rainy_image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
      <div className={`mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700/50 to-blue-700/50  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>

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
    </div>

  );
}

export default App;
