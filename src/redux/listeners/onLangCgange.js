import moment from 'moment'
import { getWeather } from '_actions/actions'

moment.locale(["uk", "ru", "en"])

let oldLang = undefined

export default function onLangChangeListener ( store ) {
  store.subscribe(() => { changeLang( store ) })
  changeLang( store )
}

function changeLang (store) {
  const { lang, places } = store.getState()

  if( lang !== oldLang ){

    places.forEach( p => {
    if(p.lat > -90 && p.lat < 90 && p.weather !== null && !p.isFetching){
        const props = {
          placeID: p.placeID,
          lat: p.lat,
          lng: p.lng,
          lang: lang
        }
        store.dispatch( getWeather(props) )
      }
    })

    moment.locale( lang )
    
    oldLang = lang
  }
}
