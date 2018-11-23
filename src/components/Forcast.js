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

export default function Forcast() {
  return (
    <AppContext.Consumer>
      {({ forecastWeather }) => (
        <div>
          <ul>
            {forecastWeather
              ? forecastWeather.list.splice(0, 30).map(con => (
                  <ForecastRow>
                    <div>{moment.unix(con.dt).format("dddd HH:MM ")}</div>
                    <div>{con.main.temp}</div>
                  </ForecastRow>
                ))
              : null}
          </ul>
        </div>
      )}
    </AppContext.Consumer>
  );
}
