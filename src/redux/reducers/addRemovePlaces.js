import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

import getNewPlaceId from '_utils/getNewPlaceId'

export default function (places, action) {
  switch (action.type) {

    case ADD_PLACE:
      return [
        ...places,
        {
          "placeName": action.placeName,
          "placeID": getNewPlaceId(places),
          "lat": action.lat,
          "lng": action.lng,
          "weather": null,
          "isExpanded": false,
          "expandedDay": -1
        }
      ]

    case REMOVE_PLACE:
      return places.filter(item => item.placeID !== action.placeID)

    default:
      return places
  }
}
