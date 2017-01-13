import { getWeather } from '_actions/actions'

export default function getWeatherApiInit ( store ) {
  getWeatherApi( store )
  return store.subscribe(() => { getWeatherApi( store ) })
}

function getWeatherApi (store) {
  const { places, lang } = store.getState()

  places.forEach( p => {
    if(p.lat > -90 && p.lat < 90 && p.weather === null && !p.isFetching){
      const props = {
        placeID: p.placeID,
        lat: p.lat,
        lng: p.lng,
        lang: lang
      }
      store.dispatch( getWeather(props) )
    }
  })

}
