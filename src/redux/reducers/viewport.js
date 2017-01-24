import { ON_RESIZE } from '_constants/actions'
import getViewPort from '_utils/getViewPort'

export default (viewport = getViewPort(), action) => {
  const {
    width,
    height,
    orientation,
    isNarrow,
    isWide
  } = action

  switch (action.type) {

    case ON_RESIZE:
      return {
        width,
        height,
        orientation,
        isNarrow,
        isWide
      }

    default:
      return viewport
  }
}
