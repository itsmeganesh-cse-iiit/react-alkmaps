import React, { Component } from "react";
import { createPointFeature } from "../../utils/vectorutils";
import PropTypes from "prop-types";

class VectorPoint extends Component {
  render() {
    const { ALKMaps } = window;
    if (ALKMaps) {
      const { map, latlong, data, currentLayer, type } = this.props;
      let pointFeature = createPointFeature(map, latlong, data, type);
      currentLayer.addFeatures([pointFeature]);
    }
    return null;
  }
}

VectorPoint.propTypes = {
  latlong: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired
  }),
  map: PropTypes.object,
  data: PropTypes.object.isRequired,
  currentLayer: PropTypes.object,
  type: PropTypes.string
};

VectorPoint.defaultProps = {};

export default VectorPoint;
