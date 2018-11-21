import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
export default function Forcast() {
  return (
    <AppContext.Consumer>
      {({ forecastWeather }) => (
        <div>
          {forecastWeather
            ? forecastWeather.list
                .splice(0, 10)
                .map(con => <div>{con.wind.speed}</div>)
            : null}
        </div>
      )}
    </AppContext.Consumer>
  );
}
