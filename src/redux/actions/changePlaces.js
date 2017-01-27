import {
  CHANGE_PLACES,
  PLACES_CHANGED
} from '_constants/actions'

export const changePlaces = () => {
  return {
    type: CHANGE_PLACES
  }
}

export const placesChanged = () => {
  return {
    type: PLACES_CHANGED
  }
}
