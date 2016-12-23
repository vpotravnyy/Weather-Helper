import { ON_RESIZE } from '_constants/actions'
import orientation from '_lib/orientation'

const initViewPort = {
  width: window.innerWidth,
  height: window.innerHeight
}
initViewPort.orientation = orientation( initViewPort )

export default function (viewport = initViewPort, action) {
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
