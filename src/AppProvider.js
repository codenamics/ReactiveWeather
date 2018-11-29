import React, { Component } from "react";
import axios from "axios";
export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: null,
      forecastWeather: null,
      city: null,
      location: false,
      getLocation: this.getLocation,
      setLocation: this.setLocation,
      changeLocation: this.changeLocation
    };
  }

  componentDidMount() {
    this.localStoreCheck();
  }
  localStoreCheck = () => {
    let item = JSON.parse(localStorage.getItem("city"));
    console.log(item);
    if (item) {
      this.fetchData(item);
    } else {
      return null;
    }
  };

  fetchData = item => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&appid=4e2b39896dcc3622534cc498191bdc35`
      )
      .then(res =>
        this.setState({
          currentWeather: res.data,
          location: true
        })
      )
      .catch(err => console.log(err));
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${item}&units=metric&appid=4e2b39896dcc3622534cc498191bdc35`
      )
      .then(res =>
        this.setState({
          forecastWeather: res.data
        })
      )
      .catch(err => console.log(err));
  };
  getLocation = input => {
    this.setState({
      city: input
    });
  };
  changeLocation = () => {
    localStorage.clear();
    this.setState({
      location: false
    });
  };
  setLocal = () => {
    const { city } = this.state;
    localStorage.setItem("city", JSON.stringify(city));
  };
  setLocation = () => {
    const { city } = this.state;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4e2b39896dcc3622534cc498191bdc35`
      )
      .then(
        res =>
          this.setState({
            currentWeather: res.data,
            location: true
          }),
        this.setLocal()
      )
      .catch(err => console.log(err));
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4e2b39896dcc3622534cc498191bdc35`
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
