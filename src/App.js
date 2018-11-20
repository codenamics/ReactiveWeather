import React, { Component } from "react";
import AppProvider from "./AppProvider";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather";

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
          <CurrentWeather />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
