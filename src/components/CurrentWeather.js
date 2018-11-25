import React, { Component } from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import fog from "../assets/fog.jpg";
import storm from "../assets/storm.jpeg";
import clouds from "../assets/clouds.jpg";
import rain from "../assets/rain.jpg";
import snow from "../assets/snow.jpg";
import clear from "../assets/clear-day.jpg";

const calcImg = ({ currentWeather }) => {
  const data = currentWeather.weather[0].main;

  if (data === "Thunderstorm") {
    return storm;
  }
  if (data === "Rain" || data === "Drizzle") {
    return rain;
  }
  if (data === "Snow") {
    return snow;
  }
  if (data === "Clouds") {
    return clouds;
  }
  if (data === "Clear") {
    return clear;
  }
  if (data === "Atmosphere") {
    return fog;
  }
};

const CurrentWeatherContainer = styled.div`
  display: flex;
  padding: 25px 30px;
  height: (100% - 50px);
  color: #fff;
  align-items: center;
  background-image: url(${calcImg});
  background-size: cover;
`;

const WeatherContainerCurrent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const City = styled.h1`
margin 0;
font-size: 55px;
font-weight:300
`;
const Span = styled.span`
  font-size: 90px;
  font-weight: 700;
`;

export class CurrentWeather extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ currentWeather }) => (
          <React.Fragment>
            {currentWeather ? (
              <CurrentWeatherContainer currentWeather={currentWeather}>
                <WeatherContainerCurrent>
                  <Span> {currentWeather.main.temp}&#8451; </Span>
                  <City> {currentWeather.name} </City>
                  <Span> {currentWeather.weather[0].main} </Span>
                </WeatherContainerCurrent>
              </CurrentWeatherContainer>
            ) : null}
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default CurrentWeather;
