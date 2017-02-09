import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '_constants/actions'

export default function (places, action) {
  switch (action.type) {

    case GET_WEATHER_REQUEST:
      if(action.error){
        return setWeather(places, action.meta, 'error', false)
      } else {
        return setWeather(places, action.meta, null, true)
      }

    case GET_WEATHER_SUCCESS:
      if(action.error){
        alert( 'Get weather error!' )
        return places
      } else if( action.payload.error ){
        alert( action.payload.msg )
        return places
      } else if ( action.error ) {
        alert( action.payload.message, action.payload.name )
        return places
      } else {
        return setWeather(places, action.meta, action.payload, false)
      }

    case GET_WEATHER_FAILURE:
      alert( 'Get weather failure!' )
      return places

    default:
      return places
  }
}

function setWeather (places, placeID, payload, isFetching) {
  return places.map(p => {
    if(p.placeID === placeID){
      return {
        ...p,
        "weather": payload,
        'isFetching': isFetching
      }
    } else return p
  })
}
