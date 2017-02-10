import { CHANGE_LANG } from '_constants/actions'

import languages from '_constants/languages'

import getInitialState from '_redux/getInitialState'
const initialState = getInitialState().lang

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      var index = languages.indexOf(state)
      var nextIndex = (index + 1) % languages.length
      return languages[nextIndex]
    default:
      return state
  }
}
