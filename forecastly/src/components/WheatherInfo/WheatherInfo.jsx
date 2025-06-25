function WeatherInfo({ weather }) {

  console.log(weather)

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Ícone do clima" />
        <p className="temp">{Math.round(weather.main.temp)}ºC</p>
      </div>
      <p className="desc">{weather.weather[0].description}</p>
      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}</p>
        <p>Umidade: {weather.main.humidity}</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  )
}

export default WeatherInfo
