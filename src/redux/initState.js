import {
  EN,
  UK,
  RU
} from '_constants/languages'

let browserLanguage = EN
switch (window.language) {
  case UK:
    browserLanguage = UK
    break;
  case RU:
    browserLanguage = RU
    break;
}

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
    "lang": browserLanguage,
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