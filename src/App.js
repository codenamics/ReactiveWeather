import React, { Component } from "react";
import AppProvider from "./AppProvider";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather";
import WeatherAdditional from "./components/WeatherAdditional";

const AppLayout = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <CurrentWeather />
          <WeatherAdditional />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
