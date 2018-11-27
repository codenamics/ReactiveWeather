import React, { Component } from "react";
import AppProvider from "./AppProvider";
import AppLayout from "./components/AppLayout";
class App extends Component {
  render() {
    return (
      <AppProvider>
        <AppLayout />
      </AppProvider>
    );
  }
}

export default App;
