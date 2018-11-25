import React, { Component } from "react";
import axios from "axios";
export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: null,
      forecastWeather: null
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&appid=4e2b39896dcc3622534cc498191bdc35"
      )
      .then(res =>
        this.setState(
          {
            currentWeather: res.data
          },
          console.log(res.data)
        )
      )
      .catch(err => console.log(err));

    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?q=warsaw,pl&units=metric&appid=4e2b39896dcc3622534cc498191bdc35"
      )
      .then(res =>
        this.setState({
          forecastWeather: res.data
        })
      )
      .catch(err => console.log(err));
  }

  setDate = async currentWeather => {
    let fulldates = await currentWeather;
    this.setState({
      fulldates
    });
    console.log(fulldates);
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
