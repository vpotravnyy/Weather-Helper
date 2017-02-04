import {
  VERY_NARROW_MAX_WIDTH,
  NARROW_MAX_WIDTH,
  MIDDLE_MAX_WIDTH,
  WIDE_MAX_WIDTH
} from '_constants/viewportWidths'

export default () => {
  const viewPort = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  viewPort.isVeryNarrow =
  viewPort.isNarrow =
  viewPort.isMiddle =
  viewPort.isWide = 
  viewPort.isUltrawide = false
  if( viewPort.width <= VERY_NARROW_MAX_WIDTH ) {
    document.body.className = 'is_very_narrow'
    viewPort.isVeryNarrow = true
  } else if( viewPort.width <= NARROW_MAX_WIDTH ) {
    document.body.className = 'is_narrow'
    viewPort.isNarrow = true
  } else if( viewPort.width <= MIDDLE_MAX_WIDTH ) {
    document.body.className = 'is_middle'
    viewPort.isMiddle = true
  } else if( viewPort.width <= WIDE_MAX_WIDTH ) {
    document.body.className = 'is_wide'
    viewPort.isWide = true
  } else if( viewPort.width > WIDE_MAX_WIDTH ) {
    document.body.className = 'is_ultrawide'
    viewPort.isUltrawide = true
  }
  
  return viewPort
}