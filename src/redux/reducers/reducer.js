import {
  ADD_PLACE,
  REMOVE_PLACE
} from '_constants/actions'

export const initialState = ['My location']

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return [
        ...state,
        'Location ' + state.length
      ]
    case REMOVE_PLACE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
