import {
  EXPAND_PLACE,
  COLLAPSE_PLACE
} from '_constants/actions'

export const expandPlace = (placeID) => {
  return {
    type: EXPAND_PLACE,
    placeID: placeID
  }
}

export const collapsePlace = (placeID) => {
  return {
    type: COLLAPSE_PLACE,
    placeID
  }
}
