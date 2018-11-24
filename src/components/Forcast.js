import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import moment from "moment";

const ForecastRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 15px 0;
  border-bottom: 1px solid #3333333b;
`;
const ForcastBox = styled.div`
  width: 200px;
  text-align: center;
`;
const ForcastLeft = styled(ForcastBox)`
  text-align: left;
`;
const ForcastRight = styled(ForcastBox)`
  text-align: right;
`;

export default function Forcast() {
  return (
    <AppContext.Consumer>
      {({ forecastWeather }) => (
        <div>
          <ul>
            {forecastWeather
              ? forecastWeather.list.splice(0, 30).map(con => (
                  <ForecastRow key={con.dt}>
                    <ForcastLeft>
                      {moment.unix(con.dt).format("dddd")}
                    </ForcastLeft>
                    <ForcastBox>
                      {moment.unix(con.dt).format("HH:MM a")}
                    </ForcastBox>
                    <ForcastBox> {con.weather[0].main} </ForcastBox>
                    <ForcastRight> {con.main.temp}&#8451;</ForcastRight>
                  </ForecastRow>
                ))
              : null}
          </ul>
        </div>
      )}
    </AppContext.Consumer>
  );
}
