import './WeatherInfo5Days.css'

function WeatherInfo5Days({ weather5Days }) {

  console.log(weather5Days)

  let dailyForecast = {}

  for(let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    console.log(date)
  }

  return (
    <div className="weather-container">
      <p>5 Days</p>
    </div>
  )
}

export default WeatherInfo5Days
