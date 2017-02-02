import {
  ADD_PLACE,
  REMOVE_PLACE,
  EXPAND_PLACE,
  COLLAPSE_PLACE,
  EXPAND_DAY,
  COLLAPSE_DAY,
  GET_COORDS_REQUEST,
  GET_COORDS_SUCCESS,
  GET_COORDS_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '_constants/actions'

import getNewPlaceId from '_utils/getNewPlaceId'
import initialState from '_redux/initState'

export default function (places = initialState.places, action) {
  switch (action.type) {

    case ADD_PLACE:
      var newID = getNewPlaceId(places)
      return [
        ...places,
        {
          "placeName": action.placeName,
          "placeID": newID,
          "lat": action.lat,
          "lng": action.lng,
          "weather": null,
          "isExpanded": false,
          "expandedDay": -1
        }
      ]

    case REMOVE_PLACE:
      return places.filter(item => item.placeID !== action.placeID)

    case EXPAND_PLACE:
      return places.map(item => {
        return {
          ...item,
          isExpanded: item.placeID === action.placeID,
          expandedDay: -1
        }
      })

    case COLLAPSE_PLACE:
      return places.map(item => {
        return {
          ...item,
          isExpanded: false,
          expandedDay: -1
        }
      })

    case EXPAND_DAY:
      return places.map(item => {
        return {
          ...item,
          expandedDay: item.placeID === action.placeID ? action.dayIndex : -1
        }
      })

    case COLLAPSE_DAY:
      return places.map(item => {
        return {
          ...item,
          expandedDay: -1
        }
      })

    case GET_COORDS_REQUEST:
      return setCoords(places, undefined, undefined, true)

    case GET_COORDS_SUCCESS:
      return setCoords(places, action.payload.location.lat, action.payload.location.lng, false)

    case GET_COORDS_FAILURE:
      return setCoords(places, "error", "error", false)

    case GET_WEATHER_REQUEST:
      if(action.error){
        return setWeather(places, action.meta, 'error', false)
      } else {
        return setWeather(places, action.meta, null, true)
      }

    case GET_WEATHER_SUCCESS:
      if(action.error){
        return setWeather(places, action.meta, 'error', false)
      } else {
        return setWeather(places, action.meta, action.payload, false)
      }

    case GET_WEATHER_FAILURE:
      return setWeather(places, action.meta, action.payload, false)

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
function setWeather (places, placeID, payload, isFetching) {
  return places.map(p => {
    if(p.placeID === placeID){
      return {
        ...p,
        "weather": payload,
        'isFetching': isFetching
      }
    } else return p
  })
}
