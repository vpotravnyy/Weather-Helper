import { CHANGE_LANG } from '_constants/actions'

import {
  EN,
  UK,
  RU
} from '_constants/languages'

import initialState from '_redux/initState'

export default function (lang = initialState.lang, action) {

  let newLang
  switch (lang) {
    case EN:
      newLang = UK
      break;
    case UK:
      newLang = RU
      break;
    case RU:
      newLang = EN
      break;
  }
  
  switch (action.type) {
    case CHANGE_LANG:
      return newLang
    default:
      return lang
  }
}
