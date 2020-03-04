/**
 * @param  {object} map alkmap object
 * @param  {object} latlong latlong object
 * @param  {object} data vector point data
 * @param  {string} type type of vector
 */
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
  try {
    return new ALKMaps.Feature.Vector(
      new ALKMaps.Geometry.Point(
        parseFloat(latlong.lat),
        parseFloat(latlong.long)
      ).transform(
        new ALKMaps.Projection("EPSG:4326"),
        map.getProjectionObject()
      ),
      featureData,
      pointAndImgData
    );
  } catch (error) {
    console.log(error);
  }
};

const VECTOR_TYPES = {
  SVG: "svg"
};

Object.freeze(VECTOR_TYPES);
