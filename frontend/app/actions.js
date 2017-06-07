export const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT'
export const REMOVE_HIGHLIGHT = 'REMOVE_HIGHLIGHT'

export function addHighlight() {
  return {
    type: ADD_HIGHLIGHT
  }
}

export function removeHighlight() {
  return {
    type: REMOVE_HIGHLIGHT
  }
}
