import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";

const CurrentWeatherContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 150px auto;
  color: black;
  border: 1px solid black;
  text-align: center;
`;

const WeatherConCurrent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CurrentWeather() {
  return (
    <AppContext.Consumer>
      {({ currentWeather }) => (
        <React.Fragment>
          {currentWeather ? (
            <CurrentWeatherContainer>
              <h1>{currentWeather.name}</h1>
              <WeatherConCurrent>
                <span>{currentWeather.main.temp}</span>
                <span>min:{currentWeather.main.temp_min}</span>
                <span>max:{currentWeather.main.temp_max}</span>
                <span>Humidity:{currentWeather.main.humidity}</span>
                <span>Pressure:{currentWeather.main.pressure}</span>
              </WeatherConCurrent>
            </CurrentWeatherContainer>
          ) : null}
        </React.Fragment>
      )}
    </AppContext.Consumer>
  );
}
