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
  return viewPort
}