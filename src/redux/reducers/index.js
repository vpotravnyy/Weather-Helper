import { combineReducers } from 'redux'
import places from '_reducers/places'
import lang from '_reducers/lang'
import viewport from '_reducers/viewport'
import isMapVisible from '_reducers/showHideMap'

const rootReducer = combineReducers({
  viewport,
  lang,
  places,
  isMapVisible
})

export default rootReducer
