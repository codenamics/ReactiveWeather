import React, { Component } from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import WeatherAdditional from "./WeatherAdditional";
import SetLocation from "./SetLocation";

const AppLayoutMain = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
`;
const AppLayoutSearch = styled(AppLayoutMain)`
  grid-template-columns: 1fr;
`;
const AppLayoutContent = styled(AppLayoutMain)`
  grid-template-columns: 1fr 1fr;
`;
export class AppLayout extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ location }) => (
          <>
            {location ? (
              <AppLayoutContent className="anim__head">
                <CurrentWeather />
                <WeatherAdditional />
              </AppLayoutContent>
            ) : (
              <AppLayoutSearch className="anim__head">
                <SetLocation />
              </AppLayoutSearch>
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AppLayout;
