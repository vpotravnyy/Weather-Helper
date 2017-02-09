import {
  ON_RESIZE
} from '_constants/actions'

export const onWindowResize = (props) => {

  return {
    type: ON_RESIZE,
    ...props
  }
}