import { onWindowResize } from '_actions/actions'

const saveDimentionsStore = (store) => {
  const props = {
    viewPortWidth: window.innerWidth,
    viewPortHeight: window.innerHeight
  }
  store.displatch( onWindowResize )
}

const windowOnresizeListenerInit = (store) => {
  window.onresize = () => {
    saveDimentionsStore( store )
  }
}

export default windowOnresizeListenerInit