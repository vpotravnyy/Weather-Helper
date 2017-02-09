import {
  GET_COORDS_REQUEST,
  GET_COORDS_SUCCESS,
  GET_COORDS_FAILURE
} from '_constants/actions'

export default function (places, action) {
  switch (action.type) {

    case GET_COORDS_REQUEST:
      return setCoords(places, undefined, undefined, true)

    case GET_COORDS_SUCCESS:
      if( action.payload.error ){
        alert( action.payload.msg )
        return places
      } else if ( action.error ) {
        alert( action.payload.message, action.payload.name )
        return places
      } else {
        return setCoords(places, action.payload.location.lat, action.payload.location.lng, false)
      }

    case GET_COORDS_FAILURE:
      if( action.payload.error ){
        alert( action.payload.msg )
        return places
      } else if ( action.error ) {
        alert( action.payload.message, action.payload.name )
        return places
      } else {
        return setCoords(places, "error", "error", false)
      }

    default:
      return places
  }
}

function setCoords (places, lat, lng, isFetching) {
  return places.map(p => {
    if(p.placeID === 0){
      return {
        ...p,
        "lat": lat,
        "lng": lng,
        'isFetching': isFetching
      }
    } else return p
  })
}
