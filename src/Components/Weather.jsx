import React, { Component } from "react";

const Weather = (props) => {
  return (
    <div className="weather-info">
      {props.city && props.country && (
        <p>
          Location:{" "}
          <span>
            {props.city},{props.country}
          </span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Temperature: <span>{props.temp}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Feels like: <span>{props.feelsLike}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Description: <span>{props.description}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Humidity: <span>{props.humidity}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Pressure: <span>{props.pressure}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Visibility: <span>{props.visibility}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Windspeed : <span>{props.windSpeed}</span>
        </p>
      )}
      {props.city && props.country && (
        <p>
          Wind Degree : <span>{props.windDegree}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
