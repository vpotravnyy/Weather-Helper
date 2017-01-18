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

export const collapsePlace = () => {
  return {
    type: COLLAPSE_PLACE
  }
}
