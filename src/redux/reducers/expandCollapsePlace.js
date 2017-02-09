import {
  EXPAND_PLACE,
  COLLAPSE_PLACE,
  EXPAND_DAY
} from '_constants/actions'

export default function (places, action) {
  switch (action.type) {

    case EXPAND_PLACE:
      return places.map(item => {
        return {
          ...item,
          isExpanded: item.placeID === action.placeID,
          expandedDay: -1
        }
      })

    case COLLAPSE_PLACE:
      return places.map(item => {
        return {
          ...item,
          isExpanded: false,
          expandedDay: -1
        }
      })

    default:
      return places
  }
}
