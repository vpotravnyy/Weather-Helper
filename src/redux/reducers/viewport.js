import { ON_RESIZE } from '_constants/actions'

const initViewPort = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default function (viewport = initViewPort, action) {
  switch (action.type) {

    case ON_RESIZE:
      return {
        width: action.width,
        height: action.height
      }

    default:
      return viewport
  }
}
