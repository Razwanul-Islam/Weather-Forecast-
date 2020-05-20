import React, { Component } from "react";

class weather extends Component {
  state = {
    city: "",
    country: "",
    temp: "",
    forecast: "",
  };

  componentDidMount() {
    const a = "Dhaka";
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        a +
        ",Bangladesh&units=metric&appid=6666a6ab9d8415cf12273e24929ad285"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          city: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp),
          forecast: data.weather[0].main,
        })
      );
  }

  onChange = () => {
    const a = this.state.tcity;
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        a +
        "&units=metric&appid=6666a6ab9d8415cf12273e24929ad285"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          tcity: "Dhaka",
          city: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp),
          forecast: data.weather[0].main,
        })
      );
  };
  render() {
    return (
      <div className="container-fluid main-app text-center">
        <div className="input-area text-center">
          <input
            className="input-box"
            type="text"
            onChange={(e) => this.setState({ tcity: e.target.value })}
            placeholder="Enter Place Name"
          />
          <button className="submit-btn border-left" onClick={this.onChange}>
            Search
          </button>
        </div>

        <div className="text-center place-name-box">
          {this.state.city}, {this.state.country}
        </div>

        <div className="time">{Date()}</div>

        <div className="temp text-center">
          <span className="temp-box">{this.state.temp}* C</span>
        </div>

        <div className="forecast">{this.state.forecast}</div>
      </div>
    );
  }
}

export default weather;
