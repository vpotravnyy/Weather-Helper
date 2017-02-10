import { ON_RESIZE } from '_constants/actions'
import getViewPort from '_utils/getViewPort'

const initialState = getViewPort()

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_RESIZE:
      return getViewPort()
    default:
      return state
  }
}
