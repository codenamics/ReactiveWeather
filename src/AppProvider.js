import React, { Component } from "react";
import axios from "axios";
export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: null,
      forecastWeather: null,
      location: null,
      getLocation: this.getLocation,
      setLocation: this.setLocation
    };
  }

  getLocation = input => {
    this.setState({
      location: input
    });
  };
  setLocal = () => {
    const { location } = this.state;
    localStorage.setItem("location", JSON.stringify(location));
  };
  setLocation = () => {
    const { location } = this.state;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4e2b39896dcc3622534cc498191bdc35`
      )
      .then(
        res =>
          this.setState({
            currentWeather: res.data
          }),
        this.setLocal()
      )
      .catch(err => console.log(err));
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4e2b39896dcc3622534cc498191bdc35`
      )
      .then(res =>
        this.setState({
          forecastWeather: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {" "}
        {this.props.children}{" "}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
