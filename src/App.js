import React, { Component } from "react";
import Form from "./Components/Form";
import Title from "./Components/Title";
import Weather from "./Components/Weather";
import "./static/css/main.css";

const API_KEY = "ed32de50867bae2e0b235c258f96ae01";

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    feelsLike: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    visibility: undefined,
    windSpeed: undefined,
    windDegree: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        visibility: data.visibility,
        windSpeed: data.wind.speed,
        windDegree: data.wind.deg,
        error: "",
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        feelsLike: undefined,
        humidity: undefined,
        pressure: undefined,
        description: undefined,
        visibility: undefined,
        windSpeed: undefined,
        windDegree: undefined,
        error: undefined,
      });
    }
  };

  getClassName = () => {
    const clouds = "overcast clouds";
    var weather = this.state.description;
    if (weather === undefined) {
      weather = "default-weather";
    } else if (weather === "clear sky") {
      weather = "clear-sky";
    } else if (weather === "clouds") {
      weather = "broken-clouds";
    } else if (weather === "haze") {
      weather = "haze";
    } else {
      weather = "default-weather";
    }
    return weather;
  };

  render() {
    const weatherClass = this.getClassName();
    return (
      <div className="container">
        <div className={weatherClass}>
          <Title />
        </div>
        <div className="weather-Card">
          <Form getWeather={this.getWeather} />

          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            feelsLike={this.state.feelsLike}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            description={this.state.description}
            visibility={this.state.visibility}
            windSpeed={this.state.windSpeed}
            windDegree={this.state.windDegree}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
