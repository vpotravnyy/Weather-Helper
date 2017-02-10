import { findIndex } from 'lodash'
import getInitialState from '_redux/getInitialState'

import placeReducer, { initialState as placeInitialState } from './place'
import getNewPlaceId from '_utils/getNewPlaceId'

import {
  ADD_PLACE,
  REMOVE_PLACE,
  EXPAND_PLACE
} from '_constants/actions'

const initialState = getInitialState().places

const getPlaceIndex = (state, action) => {
  var placeID = (action.meta && action.meta.placeID !== undefined) ? action.meta.placeID : action.placeID
  return findIndex(state, {placeID})
}

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
    case EXPAND_PLACE:
      state = state.map(place => ({...place, isExpanded: false}))
    default:
      var i = getPlaceIndex(state, action)
      if (i < 0) return state // There's no such place
      return [
        ...state.slice(0, i),
        placeReducer(state[i], action),
        ...state.slice(i + 1)
      ]
  }
}
