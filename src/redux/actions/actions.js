import {
  ADD_PLACE,
  REMOVE_PLACE,
  GET_COORDS_REQUEST,
  GET_COORDS_SUCCESS,
  GET_COORDS_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '_constants/actions'

import { CALL_API } from 'redux-api-middleware'

export const addPlace = () => {
  return {
    type: ADD_PLACE
  }
}
export const removePlace = (placeID) => {
  return {
    type: REMOVE_PLACE,
    placeID: placeID
  }
}

export const getCoords = () => {
  return {
    [CALL_API]: {
      endpoint: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCfe2Q3YniK6K5Jf533t5rPsOw2WzzgRLQ",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { "considerIp": "true" },
      types: [GET_COORDS_REQUEST, GET_COORDS_SUCCESS, GET_COORDS_FAILURE]
    }
  }
}

export const getWeather = (placeID, lat, lng) => {
  console.log("getWeather: ", lat, lng)
  return {
    [CALL_API]: {
      endpoint: "/api/"+ lat +","+ lng +"?units=si&lang=uk&exclude=minutely,flags",
      method: 'GET',
      headers: {
        'Accept': 'text/plain',
        'Content-Language': 'uk, ru, en',
        'Content-Type': 'text/plain'
      },
      types: [
        {
          type: GET_WEATHER_REQUEST,
          meta: placeID
        },
        {
          type: GET_WEATHER_SUCCESS,
          meta: placeID
        },
        {
          type: GET_WEATHER_FAILURE,
          meta: placeID
        }
      ]
    }
  }
}
