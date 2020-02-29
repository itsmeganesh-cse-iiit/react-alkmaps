import React, { Component } from "react";

import ReactAlkMaps, { VectorLayer, VectorPoint } from "react-alkmaps";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scriptLoaded: false,
      scriptError: false,
      vectorPointData: {}
    };
  }

  onLoad = map => {
    this.setState({
      scriptLoaded: true
    });
  };
  onError = error => {
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
          // url="https://maps.alk.com/api/1.2/alkmaps.js"
          apikey="17CA0885B03A6B4FADBDC3D1A51DC0BD"
          center={{ lat: -74.655522, long: 40.367494 }}
        >
          <VectorLayer label="VectorLayer">
            <VectorPoint
              latlong={{ lat: -73.965522, long: 40.367494 }}
              type="svg"
              data={{
                svg:
                  "<svg xmlns='http://www.w3.org/2000/svg' ><circle id='svgCircle' stroke='black' fill='yellow' cx='16' cy='16' r='16' /><text id='svgText' x='16' y='20' font-size='10pt' font-family='arial' font-weight='bold' text-anchor='middle' fill='black' >svg</text></svg>"
              }}
            />
            <VectorPoint
              latlong={{ lat: -74.655522, long: 40.367494 }}
              data={{
                pointRadius: 10,
                fillColor: "red",
                label: "Vector Point",
                labelYOffset: 20,
                fontWeight: "bold",
                fontColor: "#0000AA"
              }}
            />
            <VectorPoint
              latlong={{ lat: -73.655522, long: 40.367494 }}
              data={{
                externalGraphic:
                  "https://www.w3schools.com/w3css/img_avatar3.png",
                graphicHeight: 27,
                graphicWidth: 32,
                label: "External Image",
                labelYOffset: 20
              }}
            />
          </VectorLayer>
        </ReactAlkMaps>
      </div>
    );
  }
}
