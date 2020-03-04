import React, { Component } from "react";
import { createLayer, addPropsToChildren } from "../../utils/maputils";
import PropTypes from "prop-types";

class MarkerLayer extends Component {
  render() {
    const { ALKMaps } = window;
    if (ALKMaps) {
      const { children, parent, label } = this.props;
      let markerLayer = createLayer("marker", label);
      console.log(children);
      let props = { ...parent, currentLayer: markerLayer };
      let childrenWithProps = addPropsToChildren(children, props);
      parent.map.addLayers([markerLayer]);
      return childrenWithProps;
    } else {
      return null;
    }
  }
}

MarkerLayer.propTypes = {
  children: PropTypes.array,
  parent: PropTypes.object,
  label: PropTypes.string
};

MarkerLayer.defaultProps = {
  label: "MarkerLayer"
};

export default MarkerLayer;
