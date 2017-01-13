import {
  CHANGE_LANG
} from '_constants/actions'

export const changeLang = (lang) => {
  return {
    type: CHANGE_LANG,
    value: lang
  }
}
