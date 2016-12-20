import { combineReducers } from 'redux'
import places from '_reducers/places'
import lang from '_reducers/lang'

const rootReducer = combineReducers({
  lang,
  places
})

export default rootReducer
