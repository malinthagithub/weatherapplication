import { useAuth0 } from "@auth0/auth0-react";
import Layout from "./components/Layout";
import WeatherList from "./components/weather/WeatherList";
import LoginButton from "./components/auth/LoginButton";
import LogoutButton from "./components/auth/LogoutButton";
import UserProfile from "./components/auth/UserProfile";
import "./App.css";

function App() {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return (
      <Layout>
        <div className="loading">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      {error && <div className="error">Error: {error.message}</div>}
      
      {isAuthenticated ? (
        <>
          <div className="user-profile-container">
            <UserProfile />
          </div>
          <div className="weather-content">
            <WeatherList />
          </div>
          <div className="logout-container">
            <LogoutButton />
          </div>
        </>
      ) : (
        <div className="auth-container">
          <h1>Weather App</h1>
          <p>Please log in to view weather information</p>
          <LoginButton />
        </div>
      )}
    </Layout>
  );
}

export default App;