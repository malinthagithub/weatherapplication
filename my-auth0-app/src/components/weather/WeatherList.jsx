import './WeatherList.css';
import useWeather from "../../hooks/useWeather";
import WeatherCard from "./WeatherCard";

const WeatherList = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <div className="loading">Loading weather data...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="weather-list">
      <h2>Current Weather</h2>
      <div className="weather-grid">
        {weatherData?.map((city) => (
          <WeatherCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;