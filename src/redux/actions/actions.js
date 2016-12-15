import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

export const addPlace = () => {
  return {
    type: ADD_PLACE
  }
}
export const removePlace = (i) => {
  return {
    type: REMOVE_PLACE,
    index: i
  }
}
