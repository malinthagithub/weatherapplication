import cities from "./cities.json"; // ✅ Correct if same folder


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = async () => {
  console.log("🔍 Raw cities JSON:", cities);

  // Step 1: Extract City IDs
  const cityIds = cities.List.map((c) => c.CityCode);
  console.log("✅ Extracted City IDs:", cityIds);

  const weatherResults = [];

  for (const cityId of cityIds) {
    console.log(`🌐 Fetching weather for city ID: ${cityId}`);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.warn(
          `❌ Failed to fetch weather for city ID ${cityId} — Status: ${response.status} — ${errorText}`
        );
        continue;
      }

      const data = await response.json();
      console.log(`✅ Success: Weather data for ${data.name}`, data);

      weatherResults.push(data);
    } catch (err) {
      console.error(`💥 Exception occurred for city ID ${cityId}:`, err);
    }
  }

  console.log("🌦️ All weather data collected:", weatherResults);
  return weatherResults;
};
