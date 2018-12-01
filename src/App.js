import React, { Component } from "react";
import AppProvider from "./AppProvider";
import AppLayout from "./components/AppLayout";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0px;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

ul {
  padding: 0;
  margin: 0;
}

`;

class App extends Component {
  render() {
    return (
      <AppProvider>
        <GlobalStyle />
        <AppLayout />
      </AppProvider>
    );
  }
}

export default App;
