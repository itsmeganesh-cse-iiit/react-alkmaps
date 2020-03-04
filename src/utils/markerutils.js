/**
 * @param  {object} map alkmap object
 * @param  {object} latlong latlong object
 * @param  {object} data marker data
 * @param  {string} type type of marker
 */
export const createMarker = (map, latlong, data, type) => {
  var iconFav = new ALKMaps.Icon(
    ALKMaps.IMAGE.FAVORITE,
    new ALKMaps.Size(30, 30)
  );
  let mouseOverObj = {
    map: map,
    mouseOver: false
  };
  if (data.mouseOver) {
    mouseOverObj = {
      ...mouseOverObj,
      mouseOver: true
    };
  }
  try {
    return new ALKMaps.Marker(
      new ALKMaps.LonLat(
        parseFloat(latlong.lat),
        parseFloat(latlong.long)
      ).transform(
        new ALKMaps.Projection("EPSG:4326"),
        map.getProjectionObject()
      ),
      iconFav.clone(),
      data.label,
      mouseOverObj
    );
  } catch (error) {
    console.log(error);
  }
};
