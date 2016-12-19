import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

export const addPlace = () => {
  return {
    type: ADD_PLACE
  }
}
export const removePlace = (place) => {
  return {
    type: REMOVE_PLACE,
    place: place
  }
}
