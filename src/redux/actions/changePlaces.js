import {
  SHOW_MAP,
  HIDE_MAP
} from '_constants/actions'

export const showMap = () => {
  return {
    type: SHOW_MAP
  }
}

export const hideMap = () => {
  return {
    type: HIDE_MAP
  }
}
