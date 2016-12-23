import { onWindowResize } from '_actions/actions'
import getViewPort from '_lib/getViewPort'

const saveDimentionsStore = (store) => {
  store.displatch( onWindowResize( getViewPort() ) )
}

const windowOnresizeListenerInit = (store) => {
  window.onresize = () => {
    saveDimentionsStore( store )
  }
}

export default windowOnresizeListenerInit