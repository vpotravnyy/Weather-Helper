let savedString = window.localStorage.weatherHelper
  ? window.localStorage.getItem("weatherHelper")
  : ''

export default function onStateChangeListener(store) {
  changeState(store)
  return store.subscribe(() => { changeState(store) })
}

function changeState(store) {
  const state = store.getState()
  const storeToSave = {
    lang: state.lang
  }
  storeToSave.places = state.places.map(place => {
    return {
      placeName: place.placeName,
      placeID: place.placeID,
      lat: place.placeID === 0 ? undefined : place.lat,
      lng: place.placeID === 0 ? undefined : place.lng,
    }
  })
  const newString = JSON.stringify(storeToSave)

  if (savedString !== newString) {
    window.localStorage.setItem('weatherHelper', newString)
    savedString = newString
  }
}