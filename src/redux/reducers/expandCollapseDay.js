import {
  EXPAND_DAY,
  COLLAPSE_DAY
} from '_constants/actions'

export default function (places, action) {
  switch (action.type) {

    case EXPAND_DAY:
      return places.map(item => {
        return {
          ...item,
          expandedDay: item.placeID === action.placeID ? action.dayIndex : -1
        }
      })

    case COLLAPSE_DAY:
      return places.map(item => {
        return {
          ...item,
          expandedDay: -1
        }
      })

    default:
      return places
  }
}
