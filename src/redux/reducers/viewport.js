import { ON_RESIZE } from '_constants/actions'
import getViewPort from '_utils/getViewPort'

export default (viewport = getViewPort(), action) => {
  const {
    width,
    height,
    orientation,
    isVeryNarrow,
    isNarrow,
    isMiddle,
    isWide,
    isUltrawide
  } = action

  switch (action.type) {

    case ON_RESIZE:
      return {
        width,
        height,
        orientation,
        isVeryNarrow,
        isNarrow,
        isMiddle,
        isWide,
        isUltrawide
      }

    default:
      return viewport
  }
}
