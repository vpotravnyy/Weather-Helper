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
  viewPort.key = [0, 0, 0, 0]
  if( viewPort.width <= 360 ) {
    document.body.className = 'is_very_narrow'
    viewPort.isVeryNarrow = true
    viewPort.key[0] = 1
  } else if( viewPort.width <= 480 ) {
    document.body.className = 'is_narrow'
    viewPort.isNarrow = true
    viewPort.key[1] = 1
  } else if( viewPort.width <= 960 ) {
    document.body.className = 'is_normal'
    viewPort.isNormal = true
    viewPort.key[2] = 1
  } else if( viewPort.width > 960 ) {
    document.body.className = 'is_wide'
    viewPort.isWide = true
    viewPort.key[3] = 1
  }
  
  return viewPort
}