import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import img from "../assets//partly-cloudy-day.jpg";
import Sun from "./Sun";
const CurrentWeatherContainer = styled.div`
  display: flex;
  padding: 25px 30px;
  height: (100% - 50px);
  color: #fff;
  border: 1px solid black;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
`;

const WeatherConCurrent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const City = styled.h1`
margin 0;
font-size: 40px;
font-weight:400
`;
const Temp = styled.span`
  font-size: 80px;
  font-weight: 700;
`;

export default function CurrentWeather() {
  return (
    <AppContext.Consumer>
      {({ currentWeather }) => (
        <React.Fragment>
          {currentWeather ? (
            <CurrentWeatherContainer>
              <WeatherConCurrent>
                <Temp> {currentWeather.main.temp} </Temp>
                <City> {currentWeather.name} </City>
                <Temp> {currentWeather.weather[0].main} </Temp>
                <Sun date={currentWeather} />
              </WeatherConCurrent>
            </CurrentWeatherContainer>
          ) : null}
        </React.Fragment>
      )}
    </AppContext.Consumer>
  );
}
