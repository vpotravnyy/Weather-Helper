import {
  CHANGE_LANG
} from '_constants/actions'

import initialState from '_redux/initState'

export default function (lang = initialState.lang, action) {
  switch (action.type) {

    case CHANGE_LANG:
      return action.value

    default:
      return lang
  }
}
