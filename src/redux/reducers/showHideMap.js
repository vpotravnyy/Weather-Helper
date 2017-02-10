import { SHOW_MAP, HIDE_MAP } from '_constants/actions'

import getInitialState from '_redux/getInitialState'

const initialState = getInitialState().isMapVisible

export default function (isMapVisible = initialState, action) {
  switch (action.type) {

    case SHOW_MAP:
      return true

    case HIDE_MAP:
      return false

    default:
      return isMapVisible
  }
}
