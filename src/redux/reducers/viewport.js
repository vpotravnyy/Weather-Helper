import { ON_RESIZE } from '_constants/actions'

const initViewPort = {
  width: window.innerWidth,
  height: window.innerHeight
}
if(initViewPort.height > initViewPort.width){
  initViewPort.orientation = 'portrait'
} else {
  initViewPort.orientation = 'landscape'
}

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
