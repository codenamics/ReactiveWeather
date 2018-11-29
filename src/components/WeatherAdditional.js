import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import Forcast from "./Forcast";
import Sun from "./Sun";
import wind from "../assets/wind.png";
import hum from "../assets/hum.png";
import press from "../assets/press.png";
import moment from "moment";

const Container = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 0.75px;
`;
const Icons = styled.img`
  width: 50px;
  height: auto;
`;
const Units = styled.p`
  margin: 0 0 9px 5px;
  font-size: 14px;
`;

const ConditionsContainer = styled.div`
  padding: 15px 30px;
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
  align-items: center;
`;

const Conditions = styled(Header)`
  margin-top: 15px;
  padding: 20px;
  font-size: 50px;
  align-items: center;
  border-top: 1px solid #ffffff40;
`;
const Condition = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ConditionRow = styled(Condition)`
  flex-direction: row;
  align-items: flex-end;
`;

export default function WeatherAdditional() {
  return (
    <AppContext.Consumer>
      {({ currentWeather }) => (
        <Container>
          <ConditionsContainer>
            <Header>
              <span>
                {currentWeather ? <Sun date={currentWeather} /> : null}
              </span>
              <span>
                {currentWeather ? (
                  <div>
                    {moment.unix(currentWeather.dt).format("MMM D, YYYY ")}
                  </div>
                ) : null}
              </span>
            </Header>
            {currentWeather ? (
              <Conditions>
                <Condition>
                  <ConditionRow>
                    {currentWeather.wind.speed} <Units> m / s </Units>
                  </ConditionRow>
                  <Icons src={wind} />
                </Condition>
                <Condition>
                  <ConditionRow>
                    {currentWeather.main.humidity} <Units> % </Units>
                  </ConditionRow>
                  <Icons src={hum} />
                </Condition>
                <Condition>
                  <ConditionRow>
                    {currentWeather.main.pressure} <Units> hPa </Units>
                  </ConditionRow>
                  <Icons src={press} />
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
