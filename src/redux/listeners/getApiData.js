import { getCoords, getWeather } from '_actions/actions'

export default function getApiDataInit ( store ) {
  store.subscribe(() => { getApiData( store ) })
  getApiData( store )
}

function getApiData (store) {
  const { places } = store.getState()

  if(!places[0].lat && !places[0].isFetching){
    store.dispatch( getCoords() )
  }

  places.forEach( p => {
    if(p.lat > -90 && p.lat < 90 && p.weather === null && !p.isFetching){
      const props = {
        placeID: p.placeID,
        lat: p.lat,
        lng: p.lng
      }
      store.dispatch( getWeather(props) )
    }
  })
}
