import {
  ADD_PLACE,
  REMOVE_PLACE,
  GET_COORDS_REQUEST,
  GET_COORDS_SUCCESS,
  GET_COORDS_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
  ON_RESIZE
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
      endpoint: "/coords",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { "considerIp": "true" },
      types: [GET_COORDS_REQUEST, GET_COORDS_SUCCESS, GET_COORDS_FAILURE]
    }
  }
}

export const getWeather = (props) => {
  const {
    placeID,
    lat,
    lng,
    lang
  } = props
  
  return {
    [CALL_API]: {
      endpoint: "/weather/"+ lat +","+ lng +"?units=si&lang="+ lang +"&exclude=minutely,flags",
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

export const onWindowResize = (props) => {
  const {
    width,
    height,
    orientation,
    isNarrow,
    isWide
  } = props

  return {
    type: ON_RESIZE,
    width,
    height,
    orientation,
    isNarrow,
    isWide
  }
}