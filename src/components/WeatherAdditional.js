import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";

const Units = styled.p`
  font-size: 12px;
`;

const ConditionsContainer = styled.div`
  padding: 25px 30px;
  background-color: #2789ec;
  height: 25%;
  font-weight: 500;
  font-size: 18px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Conditions = styled(Header)`
  margin-top: 15px;
  padding: 20px;
  font-size: 50px;
  height: 75%;
  align-items: center;
  border-top: 1px solid #ffffff40;
`;
const Condition = styled.span`
  text-align: center;
`;

export default function WeatherAdditional() {
  return (
    <AppContext.Consumer>
      {({ currentWeather, date }) => (
        <ConditionsContainer>
          <Header>
            <span>Statistics</span>
            <span>{date}</span>
          </Header>
          {currentWeather ? (
            <Conditions>
              <Condition>
                {currentWeather.main.temp_min}
                <Units>TMax</Units>
              </Condition>
              <Condition>
                {currentWeather.main.temp_max} <Units>TMin</Units>
              </Condition>
              <Condition>
                {currentWeather.main.humidity} <Units>Humidity</Units>
              </Condition>
              <Condition>
                {currentWeather.main.pressure}
                <Units>Pressure</Units>
              </Condition>
            </Conditions>
          ) : null}
        </ConditionsContainer>
      )}
    </AppContext.Consumer>
  );
}
