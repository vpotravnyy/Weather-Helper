import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

import initialState from '_redux/initState'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      var maxPlaceId = state.places.reduce((memo, el) => {
        return el.placeID > memo ? el.placeID : memo
      }, -1)
      console.log(maxPlaceId)
      var placeIdArray = state.places.reduce((memo, el) => {
        memo[el.placeID] = el.placeID
        return memo
      }, Array(maxPlaceId + 2).fill(-1))
      console.log(placeIdArray)
      var newID
      placeIdArray.some((el, i) => {
        if(el < 0) newID = i
        return el < 0
      })
      console.log(newID)
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
