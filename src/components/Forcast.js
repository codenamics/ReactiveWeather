import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import moment from "moment";

const ForecastRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
`;

export default function Forcast() {
  return (
    <AppContext.Consumer>
      {({ forecastWeather }) => (
        <div>
          {forecastWeather
            ? forecastWeather.list.splice(0, 10).map(con => (
                <ul>
                  <ForecastRow>
                    <div>{moment.unix(con.dt).format("dddd HH:MM ")}</div>
                    <div>{con.main.temp}</div>
                  </ForecastRow>
                </ul>
              ))
            : null}
        </div>
      )}
    </AppContext.Consumer>
  );
}
