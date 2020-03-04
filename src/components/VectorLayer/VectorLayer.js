import React, { Component } from "react";
import { createLayer, addPropsToChildren } from "../../utils/maputils";
import PropTypes from "prop-types";

class VectorLayer extends Component {
  render() {
    const { ALKMaps } = window;
    if (ALKMaps) {
      const { children, parent, label } = this.props;
      let vectorLayer = createLayer("vector", label);
      let props = { ...parent, currentLayer: vectorLayer };
      let childrenWithProps = addPropsToChildren(children, props);
      parent.map.addLayers([vectorLayer]);
      return childrenWithProps;
    } else {
      return null;
    }
  }
}

VectorLayer.propTypes = {
  children: PropTypes.array,
  parent: PropTypes.object,
  label: PropTypes.string
};

VectorLayer.defaultProps = {
  label: "VectorLayer"
};

export default VectorLayer;
