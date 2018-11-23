import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import Forcast from "./Forcast";

const Container = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 0.75px;
`;

const Units = styled.p`
  font-size: 12px;
`;

const ConditionsContainer = styled.div`
  padding: 25px 30px;
  background-color: #2789ec;

  font-weight: 500;
  font-size: 18px;
`;

const ForCastContainer = styled(ConditionsContainer)`
  background-color: #fff;
  min-height: 500px;

  overflow: auto;
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
        <Container>
          <ConditionsContainer>
            <Header>
              <span> Statistics </span> <span> {date} </span>
            </Header>
            {currentWeather ? (
              <Conditions>
                <Condition>
                  {currentWeather.wind.speed} <Units> Wind m / s </Units>
                </Condition>
                <Condition>
                  {currentWeather.main.humidity} <Units> Humidity </Units>
                </Condition>
                <Condition>
                  {currentWeather.main.pressure} <Units> Pressure </Units>
                </Condition>
              </Conditions>
            ) : null}
          </ConditionsContainer>
          <ForCastContainer>
            <Forcast />
          </ForCastContainer>
        </Container>
      )}
    </AppContext.Consumer>
  );
}
