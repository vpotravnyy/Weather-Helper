import { combineReducers } from 'redux'
import places from '_reducers/places'
import lang from '_reducers/lang'
import viewport from '_reducers/viewport'
import arePlacesChanging from '_reducers/arePlacesChanging'

const rootReducer = combineReducers({
  viewport,
  lang,
  places,
  arePlacesChanging
})

export default rootReducer
