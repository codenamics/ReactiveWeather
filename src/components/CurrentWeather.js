import React from "react";
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
  console.log(data);
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
  if (data === "Atmosphere" || data === "Mist") {
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
  position: relative;
`;

const WeatherContainerCurrent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const City = styled.h1`
  margin: 0;
  font-size: 55px;
  font-weight: 300;
`;
const Span = styled.span`
  font-size: 90px;
  font-weight: 700;
`;
const ChangeLocation = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 55px;
`;
export default function CurrentWeather() {
  return (
    <AppContext.Consumer>
      {({ currentWeather, changeLocation }) => (
        <>
          {currentWeather ? (
            <CurrentWeatherContainer currentWeather={currentWeather}>
              <ChangeLocation onClick={changeLocation}>
                <i className="fas fa-search" />
              </ChangeLocation>
              <WeatherContainerCurrent>
                <Span> {currentWeather.main.temp}&#8451; </Span>
                <City> {currentWeather.name} </City>
                <Span> {currentWeather.weather[0].main} </Span>
              </WeatherContainerCurrent>
            </CurrentWeatherContainer>
          ) : null}
        </>
      )}
    </AppContext.Consumer>
  );
}
