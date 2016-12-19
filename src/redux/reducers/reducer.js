import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

import getNewPlaceId from '_lib/getNewPlaceId'
import initialState from '_redux/initState'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      var newID = getNewPlaceId(state)
      return Object.assign({}, state, {
        places: [
          ...state.places,
          {
            "place": 'CityName' + newID,
            "placeID": newID,
            "lat": undefined,
            "lng": undefined,
            "weather": ""
          }
        ]
      })
    case REMOVE_PLACE:
      return Object.assign({}, state, {
        places: state.places.filter(item => item.place !== action.place)
      })
    default:
      return state
  }
}
