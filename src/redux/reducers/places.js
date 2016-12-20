import {
  ADD_PLACE,
  REMOVE_PLACE,
  GET_COORDS_REQUEST,
  GET_COORDS_SUCCESS,
  GET_COORDS_FAILURE
} from '_constants/actions'

import getNewPlaceId from '_lib/getNewPlaceId'
import initialState from '_redux/initState'

export default function (places = initialState.places, action) {
  switch (action.type) {

    case ADD_PLACE:
      var newID = getNewPlaceId(places)
      return [
        ...places,
        {
          "place": 'CityName' + newID,
          "placeID": newID,
          "lat": undefined,
          "lng": undefined,
          "weather": null
        }
      ]

    case REMOVE_PLACE:
      return places.filter(item => item.placeID !== action.placeID)

    case GET_COORDS_REQUEST:
      return updatePlaces(places, undefined, undefined, true)

    case GET_COORDS_SUCCESS:
      return updatePlaces(places, action.payload.location.lat, action.payload.location.lng, false)

    case GET_COORDS_FAILURE:
      console.log('GET_COORDS_FAILURE', action)
      return updatePlaces(places, undefined, undefined, false)

    default:
      return places
  }
}

function updatePlaces (places, lat, lng, isFetching) {
  return places.map(p => {
    if(p.placeID === 0){
      return {
        "place": 'Current',
        "placeID": 0,
        "lat": lat,
        "lng": lng,
        "weather": null,
        'isFetching': isFetching
      }
    } else return p
  })
}
