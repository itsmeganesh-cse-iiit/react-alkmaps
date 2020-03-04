import React, { Component } from "react";
import PropTypes from "prop-types";
import { loadScript } from "./utils/load-script";
import {
  createBaseMap,
  createInitMapProjection,
  setCenter,
  addPropsToChildren
} from "./utils/maputils";
// import styles from "./styles.css";
import VectorLayer from "./components/VectorLayer/VectorLayer";
import VectorPoint from "./components/VectorPoint/VectorPoint";
let ALKMaps = null; // ! Alk Maps Global Object
let map = null; //! Alk Map instance

export default class ReactAlkMaps extends Component {
  constructor(props) {
    super(props);
    this.mainMap = React.createRef();

    this.state = {
      scriptLoaded: false,
      scriptError: false
    };
  }

  static propTypes = {
    text: PropTypes.string
  };

  onLoad = () => {
    this.setState({
      scriptLoaded: true
    });
  };

  mapInit = () => {
    const { apikey } = this.props;
    if (apikey) {
      const { lat, long } = this.props.center;
      ALKMaps = window.ALKMaps;
      map = createInitMapProjection(this.mainMap.current);
      this.map = map;
      ALKMaps.APIKey = apikey;
      let layer = createBaseMap();
      map.addLayers([layer]);
      setCenter(map, lat, long);
    } else {
      throw new Error("No Api Key provided");
    }
  };

  componentDidMount() {
    loadScript(this.props.url, this.props.onLoad, this.props.onError);
  }
  render() {
    const { ALKMaps } = window;
    const { children } = this.props;
    let childProps = {
      parent: this
    };
    let childrenWithProps = addPropsToChildren(children, childProps);
    if (childrenWithProps) {
      childrenWithProps = childrenWithProps.filter(
        child => child.type.name === MAP_ITEMS.VECTORLAYER
      );
    }
    return (
      <div>
        <div
          id="mainMap"
          ref={this.mainMap}
          style={{
            width: "calc(100% - 1px)",
            height: "100vh",
            position: "relative"
          }}
        >
          {childrenWithProps}
        </div>
        {ALKMaps && this.mapInit()}
      </div>
    );
  }
}

export { VectorLayer, VectorPoint };

ReactAlkMaps.propTypes = {
  url: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  apikey: PropTypes.string,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired
  })
};

ReactAlkMaps.defaultProps = {
  onLoad: () => {},
  onError: () => {},
  url: "https://maps.alk.com/api/1.2/alkmaps.js",
  apikey: "",
  center: {
    lat: -74.655522,
    long: 40.367494
  }
};

const MAP_ITEMS = {
  VECTORLAYER: "VectorLayer"
};
Object.freeze(MAP_ITEMS);
