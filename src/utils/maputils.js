import React from "react";
/**
 * @param  {String} type LayerType
 * @param  {String} name LayerName
 */
export const createLayer = (type, name) => {
  switch (type) {
    case LAYER_TYPES.VECTORLAYER: {
      return new ALKMaps.Layer.Vector(name);
    }
    case LAYER_TYPES.MARKER_LAYER: {
      return new ALKMaps.Layer.Markers(name);
    }
    default: {
      throw new Error(`${"L404"}- ${MAP_ERRORS.L404}`);
    }
  }
};

export const createBaseMap = () => {
  return new ALKMaps.Layer.BaseMap(
    "ALK Maps",
    {},
    { displayInLayerSwitcher: false }
  );
};

/**
 * @param  {ref} mapRef Alkmap refernce
 * */
export const createInitMapProjection = mapRef => {
  return new ALKMaps.Map(mapRef, {
    displayProjection: new ALKMaps.Projection("EPSG:4326")
  });
};

/**
 * @param  {Object} map AlkMap Instance
 * @param  {long} lon longitude
 * @param  {long} lat lattitude
 */
export const setCenter = (map, lon, lat) => {
  map.setCenter(
    new ALKMaps.LonLat(lon, lat).transform(
      new ALKMaps.Projection("EPSG:4326"),
      map.getProjectionObject()
    ),
    9
  );
};
/**
 * @param  {array} children Array of React elements
 * @param  {object} props Extra props to child
 */
export const addPropsToChildren = (children, props) => {
  return React.Children.map(
    children,
    function(child) {
      let childProps = props;
      let childWithExtraProps = React.cloneElement(child, childProps);
      return childWithExtraProps;
    }.bind(this)
  );
};

const LAYER_TYPES = {
  VECTORLAYER: "vector",
  MARKER_LAYER: "marker"
};

const MAP_ERRORS = {
  L404: "No such Layer type found"
};
Object.freeze(LAYER_TYPES);
Object.freeze(MAP_ERRORS);
