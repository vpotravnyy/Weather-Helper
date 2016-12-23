import { onWindowResize } from '_actions/actions'

const saveDimentionsStore = (store) => {
  const props = {
    viewPortWidth: window.innerWidth,
    viewPortHeight: window.innerHeight
  }
  if(props.viewPortHeight > props.viewPortWidth){
    props.orientation = 'portrait'
  } else {
    props.orientation = 'landscape'
  }
  store.displatch( onWindowResize(props) )
}

const windowOnresizeListenerInit = (store) => {
  window.onresize = () => {
    saveDimentionsStore( store )
  }
}

export default windowOnresizeListenerInit