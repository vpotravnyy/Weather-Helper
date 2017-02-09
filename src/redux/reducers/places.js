import initialState from '_redux/initState'

import addRemovePlaces from '_reducers/addRemovePlaces'
import expandCollapsePlace from '_reducers/expandCollapsePlace'
import expandCollapseDay from '_reducers/expandCollapseDay'
import getCoords from '_reducers/getCoords'
import getWeather from '_reducers/getWeather'

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

export default function placeReducer (places = initialState.places, action) {
  
  switch (action.type) {

    case ADD_PLACE:
    case REMOVE_PLACE:
      return addRemovePlaces(places, action)

    case EXPAND_PLACE:
    case COLLAPSE_PLACE:
      return expandCollapsePlace(places, action)

    case EXPAND_DAY:
    case COLLAPSE_DAY:
      return expandCollapseDay(places, action)

    case GET_COORDS_REQUEST:
    case GET_COORDS_SUCCESS:
    case GET_COORDS_FAILURE:
      return getCoords(places, action)

    case GET_WEATHER_REQUEST:
    case GET_WEATHER_SUCCESS:
    case GET_WEATHER_FAILURE:
      return getWeather(places, action)

    default:
      return places
  }
}
