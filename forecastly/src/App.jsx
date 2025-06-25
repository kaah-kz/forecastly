import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './components/WheatherInfo/WheatherInfo'
// import './App.css'

function App() {
  const [weather, setWheather] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = 'a649b7af49daf85c4903ee2aa9d0fdf7'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWheather(apiInfo.data)

    // console.log(apiInfo)

  }

  return (
    <div>
      <h1>Forecastly - Your weather, simplified.</h1>
      <input ref={inputRef} type='text' placeholder='Enter the city name'/>
      <button onClick={searchCity}>Search</button>

      {weather && <WeatherInfo weather={weather}/>}
    </div>
  )
}

export default App
