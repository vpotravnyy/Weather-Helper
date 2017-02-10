import { findIndex } from 'lodash'
import getInitialState from '_redux/getInitialState'

import placeReducer, { initialState as placeInitialState } from './place'
import getNewPlaceId from '_utils/getNewPlaceId'

import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

const initialState = getInitialState().places
export default function placesReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return [
        ...state,
        {
          ...placeInitialState,
          'placeName': action.placeName,
          'placeID': getNewPlaceId(state),
          'lat': action.lat,
          'lng': action.lng
        }
      ]
    case REMOVE_PLACE:
      return state.filter(it => it.placeID !== action.placeID)
    default:
      var placeID = (action.meta && action.meta.placeID !== undefined) ? action.meta.placeID : action.placeID
      var i = findIndex(state, {placeID})
      if (i < 0) return state // There's no such place
      return [
        ...state.slice(0, i),
        placeReducer(state[i], action),
        ...state.slice(i + 1)
      ]
  }
}
