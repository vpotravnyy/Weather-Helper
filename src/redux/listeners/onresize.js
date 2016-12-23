import { onWindowResize } from '_actions/actions'
import orientation from '_lib/orientation'

const saveDimentionsStore = (store) => {
  const props = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  props.orientation = orientation( props )
  store.displatch( onWindowResize(props) )
}

const windowOnresizeListenerInit = (store) => {
  window.onresize = () => {
    saveDimentionsStore( store )
  }
}

export default windowOnresizeListenerInit