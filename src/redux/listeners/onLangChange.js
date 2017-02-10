import moment from 'moment'
import 'moment-timezone'
import { getWeather } from '_actions/getWeather'
import languages from '_constants/languages'

moment.locale(languages)

export default function onLangChangeListener (store) {
  changeLang(store)
  return store.subscribe(() => {
    const states = store.liftedStore.getState().computedStates
    const oldState = states[states.length - 2].state
    const newState = states[states.length - 1].state
    if (oldState.lang !== newState.lang) {
      changeLang(store)
    }
  })
}

const hasWeather = place => place.lat > -90 && place.lat < 90 && place.weather !== null && !place.isFetching

function changeLang (store) {
  const { lang, places } = store.getState()
  moment.locale(lang)

  places
    .filter(hasWeather)
    .forEach(({ placeID, lat, lng }) =>
      store.dispatch(getWeather({ placeID, lat, lng, lang })
    ))
}
