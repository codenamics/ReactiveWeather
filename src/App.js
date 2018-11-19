import React, { Component } from "react";
import AppProvider from "./AppProvider";
import CurrentWeather from "./components/CurrentWeather";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <CurrentWeather />
      </AppProvider>
    );
  }
}

export default App;
