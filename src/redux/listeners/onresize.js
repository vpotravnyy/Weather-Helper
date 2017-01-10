import { onWindowResize } from '_actions/actions'
import getViewPort from '_utils/getViewPort'


export default function (store) {
  const listener = () => {
    const dimentions = getViewPort()
    store.dispatch(onWindowResize(dimentions))
  }

  window.addEventListener('resize', listener)

  return () => {
    window.removeEventListener('resize', listener)
  }

}