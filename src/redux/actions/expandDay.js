import {
  EXPAND_DAY,
  COLLAPSE_DAY
} from '_constants/actions'

export const expandDay = (data) => {
  const { placeID, dayIndex } = data
  return {
    type: EXPAND_DAY,
    placeID: placeID,
    dayIndex: dayIndex
  }
}

export const collapseDay = () => {
  return {
    type: COLLAPSE_DAY
  }
}
