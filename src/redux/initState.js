let initialState
if( window.localStorage.state ){
  initialState = JSON.parse(window.localStorage.getItem("state"))
} else {
  initialState = {
    "lang": "en",
    "places": [
      {
        "place": "Current",
        "placeID": 0,
        "lat": undefined,
        "lng": undefined,
        "weather": null,
        'isFetching': false
      }
    ]
  }
}

export default initialState