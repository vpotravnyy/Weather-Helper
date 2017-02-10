import languages, { EN } from '_constants/languages'

const initialState = {
  'lang': EN,
  'viewport': null,
  'places': [
    {
      'placeName': 'Current position',
      'placeID': 0,
      'lat': undefined,
      'lng': undefined,
      'weather': null,
      'isFetching': false,
      'isExpanded': false,
      'expandedDay': -1
    }
  ],
  isMapVisible: false
}

function cleanupPlace (place) {
  return {
    ...place,
    'weather': null,
    'isFetching': false,
    'isExpanded': false,
    'expandedDay': -1
  }
}

function cleanupState (state) {
  return {
    ...initialState,
    ...state,
    places: state.places.map(cleanupPlace),
    isMapVisible: false
  }
}

export default function getInitialState () {
  const language = languages.includes(window.language) ? window.language : EN
  const savedState = JSON.parse(window.localStorage.getItem('weatherHelper'))

  if (savedState) return cleanupState(savedState)
  else return { ...initialState, 'lang': language }
}
