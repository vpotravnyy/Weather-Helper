export default () => {
  const viewPort = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  if(viewPort.height > viewPort.width){
    viewPort.orientation = 'portrait'
  } else {
    viewPort.orientation = 'landscape'
  }
  viewPort.isVeryNarrow = false
  viewPort.isNarrow = false
  viewPort.isNormal = false
  viewPort.isWide = false
  if( viewPort.width <= 360 ) {
    document.body.className = 'is_very_narrow'
    viewPort.isVeryNarrow = true
  } else if( viewPort.width <= 480 ) {
    document.body.className = 'is_narrow'
    viewPort.isNarrow = true
  } else if( viewPort.width <= 960 ) {
    document.body.className = 'is_normal'
    viewPort.isNarrow = true
  } else if( viewPort.width > 960 ) {
    document.body.className = 'is_wide'
    viewPort.isWide = true
  }
  
  return viewPort
}