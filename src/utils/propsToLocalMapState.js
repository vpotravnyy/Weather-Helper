const propsToLocalMapState = props => {
  return {
    markers: props.places.map(p => {
      return {
        key: p.placeID,
        placeName: p.placeName,
        placeID: p.placeID,
        position: {
          lat: p.lat,
          lng: p.lng
        },
        title: p.placeName,
        defaultAnimation: 2
      }
    }),
    center: {
      lat: props.places[0].lat,
      lng: props.places[0].lng
    }
  }
}

export default propsToLocalMapState