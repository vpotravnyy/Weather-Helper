import { CHANGE_PLACES, PLACES_CHANGED } from '_constants/actions'

import initialState from '_redux/initState'

export default function (arePlacesChanging = initialState.arePlacesChanging, action) {
  
  switch (action.type) {
    case CHANGE_PLACES:
      return true
    case PLACES_CHANGED:
      return false
    default:
      return arePlacesChanging
  }
}
