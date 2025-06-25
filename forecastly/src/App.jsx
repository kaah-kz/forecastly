import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './components/WeatherInfo/WeatherInfo.jsx';
import WeatherInfo5Days from './components/WeatherInfo5Days/WeatherInfo5Days.jsx';
import './components/WeatherInfo/WeatherInfo.css';

import './App.css'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = 'a649b7af49daf85c4903ee2aa9d0fdf7'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)

    // console.log(apiInfo)

  }

  return (
    <div className='container'>
      <h1>Forecastly - Your weather, simplified.</h1>
      <input ref={inputRef} type='text' placeholder='Enter the city name'/>
      <button onClick={searchCity}>Search</button>

      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
