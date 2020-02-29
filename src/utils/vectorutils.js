export const createPointFeature = (map, latlong, data, type) => {
  let featureData = null;
  let pointAndImgData = null;
  switch (type) {
    case VECTOR_TYPES.SVG: {
      featureData = {
        svg: {
          content: data.svg
        }
      };
      pointAndImgData = null;
      break;
    }
    default: {
      featureData = null;
      pointAndImgData = {
        ...data
      };
    }
  }
  return new ALKMaps.Feature.Vector(
    new ALKMaps.Geometry.Point(latlong.lat, latlong.long).transform(
      new ALKMaps.Projection("EPSG:4326"),
      map.getProjectionObject()
    ),
    featureData,
    pointAndImgData
  );
};

const VECTOR_TYPES = {
  SVG: "svg"
};

Object.freeze(VECTOR_TYPES);
