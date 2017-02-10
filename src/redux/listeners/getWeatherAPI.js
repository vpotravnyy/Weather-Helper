import { getWeather } from '_actions/getWeather'

export default function getWeatherApiInit (store) {
  getWeatherApi(store)
  return store.subscribe(() => { getWeatherApi(store) })
}

const needWeather = place => place.weather === null && !place.isFetching && place.lat > -90 && place.lat < 90

function getWeatherApi (store) {
  const { places, lang } = store.getState()

  places
    .filter(needWeather)
    .forEach(({ placeID, lat, lng }) =>
      store.dispatch(getWeather({ placeID, lat, lng, lang })
    ))
}
