import React, { Component } from "react";

import ReactAlkMaps from "react-alkmaps";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scriptLoaded: false,
      scriptError: false
    };
  }

  onLoad = map => {
    this.setState({
      scriptLoaded: true
    });
    console.log("Got it Gani", map);
  };
  onError = error => {
    console.log(error);
    this.setState({
      scriptError: true
    });
  };
  render() {
    return (
      <div>
        <ReactAlkMaps
          onLoad={this.onLoad}
          onError={this.onError}
          url="https://maps.alk.com/api/1.2/alkmaps.js"
        />
        {/* {this.state.scriptLoaded ? "bannu" : "pavani"} */}
      </div>
    );
  }
}
