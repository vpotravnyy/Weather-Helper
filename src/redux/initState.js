import {
  EN,
  UK,
  RU
} from '_constants/languages'

let initialState
if( window.localStorage.state )
{
  initialState = JSON.parse(window.localStorage.getItem("state"))
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
        'isExpanded': true
      }
    ]
  }
}

export default initialState