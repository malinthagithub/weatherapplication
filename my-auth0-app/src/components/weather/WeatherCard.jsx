import './weatherCard.css';
const WeatherCard = ({ city }) => {
  return (
    <div className="weather-card">
      <h3>{city.name}</h3>
      <div className="weather-details">
        <p className="temperature">{Math.round(city.main.temp)}°C</p>
        <p className="condition">
          {city.weather[0].description}
        </p>
      </div>
      <div className="weather-meta">
        <p>Humidity: {city.main.humidity}%</p>
        <p>Wind: {city.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;