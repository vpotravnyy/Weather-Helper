import { ON_RESIZE } from '_constants/actions'
import getViewPort from '_lib/getViewPort'

export default (viewport = getViewPort(), action) => {
  switch (action.type) {

    case ON_RESIZE:
      return {
        width: action.width,
        height: action.height,
        orientation: action.orientation
      }

    default:
      return viewport
  }
}
