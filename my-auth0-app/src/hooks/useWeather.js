import { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/weather"; // Your individual-calls fetcher
import cities from "../api/cities.json";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in ms

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);

        // Check cache first
        const cachedData = localStorage.getItem("weatherData");
        const cachedTimestamp = localStorage.getItem("weatherDataTimestamp");
        const now = Date.now();

        if (cachedData && cachedTimestamp && now - parseInt(cachedTimestamp) < CACHE_DURATION) {
          setWeatherData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // No valid cache — fetch fresh data with multiple API calls
        // Pass city codes array to fetchWeatherData
        const cityCodes = cities.List.map(city => city.CityCode);
        const data = await fetchWeatherData(cityCodes);  // should return array of weather objects

        setWeatherData(data); // data is an array, NOT data.list
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("weatherDataTimestamp", now.toString());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, []);

  return { weatherData, loading, error };
};

export default useWeather;
