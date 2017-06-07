import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { createStore } from 'redux'
import highlightTitle from './reducers'
import { Provider } from 'react-redux'

let store = createStore(highlightTitle)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
