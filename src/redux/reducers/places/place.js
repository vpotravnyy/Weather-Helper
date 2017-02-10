import {
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

export const initialState = {
  'placeName': '',
  'placeID': undefined,
  'lat': undefined,
  'lng': undefined,
  'weather': null,
  'isExpanded': false,
  'expandedDay': -1
}

// TODO:
// We have here weather info and coords info merged into plain object
// My proposal is to split this into subtree items like so:
//  {
//    'placeName': '',
//    'placeID': undefined,
//    'isExpanded': false,
//    'expandedDay': -1
//    'location': {
//      'lat': undefined,
//      'lng': undefined,
//      'isFetching': false,
//      'error': null
//    }
//    'weather': {
//      'data': null, // or 'list' or whatever you have there
//      'isFetching': false,
//      'error': null
//    }
//  }
//
// It will allow seamlessly work with 'weather' and 'location' subtrees
// in separate reducers - just call it in 'default' case and move all
// action handlers there:
//    default:
//      return {
//        ...state,
//        weather: weatherReducer(state.weather, action),
//        location: weatherReducer(state.location, action)
//      }
//
// But currently can't do it because don't want to touch the data tree / components

export default function placeReducer (state = initialState, action) {
  switch (action.type) {
    case EXPAND_PLACE:
      return {
        ...state,
        isExpanded: true,
        expandedDay: -1
      }
    case COLLAPSE_PLACE:
      return {
        ...state,
        isExpanded: false,
        expandedDay: -1
      }
    case EXPAND_DAY:
      return {
        ...state,
        expandedDay: action.dayIndex
      }
    case COLLAPSE_DAY:
      return {
        ...state,
        expandedDay: -1
      }

    case GET_COORDS_REQUEST:
      return {
        ...state,
        'lat': undefined,
        'lng': undefined,
        'isFetching': true,
        'error': false
      }
    case GET_COORDS_SUCCESS:
      return {
        ...state,
        'lat': action.payload.location.lat,
        'lng': action.payload.location.lng,
        'isFetching': false
      }
    case GET_COORDS_FAILURE:
      return {
        ...state,
        'lat': 'error',
        'lng': 'error',
        'isFetching': false,
        error: action.payload // deal with it later. Anyway reducer is not a place for side effects / present 'alerts'
      }

    case GET_WEATHER_REQUEST:
      return {
        ...state,
        'weather': null,
        'isFetching': true,
        'error': null
      }
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        'weather': action.payload,
        isFetching: false
      }
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
