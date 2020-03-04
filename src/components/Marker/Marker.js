import React, { Component } from "react";
import { createMarker } from "../../utils/markerutils";
import PropTypes from "prop-types";

class Marker extends Component {
  render() {
    const { ALKMaps } = window;
    if (ALKMaps) {
      const { map, latlong, data, currentLayer, type } = this.props;
      let newMarker = createMarker(map, latlong, data, type);
      currentLayer.addMarker(newMarker);
    }
    return null;
  }
}

Marker.propTypes = {
  latlong: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired
  }),
  map: PropTypes.object,
  data: PropTypes.object.isRequired,
  currentLayer: PropTypes.object,
  type: PropTypes.string
};

Marker.defaultProps = {};

export default Marker;
