import moment from 'moment'
import 'moment-timezone'
import { getWeather } from '_actions/getWeather'
import {
  EN,
  UK,
  RU
} from '_constants/languages'

moment.locale([EN, UK, RU])

let oldLang = undefined

export default function onLangChangeListener ( store ) {
  changeLang( store )
  return store.subscribe(() => { changeLang( store ) })
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
