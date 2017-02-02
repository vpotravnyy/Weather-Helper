import {
  EN,
  UK,
  RU
} from '_constants/languages'

let initialState
if( window.localStorage.weatherHelper )
{
  initialState = JSON.parse(window.localStorage.getItem("weatherHelper"))
  initialState.places = initialState.places.map(place => {
    return {
      ... place,
      "weather": null,
      'isFetching': false,
      'isExpanded': false,
      'expandedDay': -1
    }
  })
  initialState.isMapVisible = false
}
else
{
  initialState = {
    "lang": UK,
    "viewport": null,
    "places": [
      {
        "placeName": "Current position",
        "placeID": 0,
        "lat": undefined,
        "lng": undefined,
        "weather": null,
        'isFetching': false,
        'isExpanded': false,
        'expandedDay': -1
      }
    ],
    isMapVisible: false
  }
}

export default initialState