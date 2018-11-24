import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import img from "../assets//partly-cloudy-day.jpg";

const CurrentWeatherContainer = styled.div`
  display: flex;
  padding: 25px 30px;
  height: (100% - 50px);
  color: #fff;
  align-items: center;
  background-image: url(${img});
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

export default function CurrentWeather() {
  return (
    <AppContext.Consumer>
      {({ currentWeather }) => (
        <React.Fragment>
          {currentWeather ? (
            <CurrentWeatherContainer>
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
