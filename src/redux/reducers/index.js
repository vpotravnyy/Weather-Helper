import { combineReducers } from 'redux'
import places from '_reducers/places'
import lang from '_reducers/lang'
import viewport from '_reducers/viewport'

const rootReducer = combineReducers({
  viewport,
  lang,
  places
})

export default rootReducer
