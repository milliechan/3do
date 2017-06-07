import { ADD_HIGHLIGHT, REMOVE_HIGHLIGHT, addHighlight, removeHighlight } from './actions'

const initialState = {
  show: false
}

function highlightTitle(state = initialState, action) {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return Object.assign({}, state, {
        show: true
      })
    case REMOVE_HIGHLIGHT:
      return Object.assign({}, state, {
        show: false
      })
    default:
      return state
  }
}

export default highlightTitle
