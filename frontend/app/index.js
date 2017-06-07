import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import highlightTitle from './reducers'
import { Provider } from 'react-redux'
import client from './apolloClient'
import { ApolloProvider } from 'react-apollo'

const reducers = combineReducers({
  highlightTitle,
  apollo: client.reducer()
})

const store = createStore(
  reducers,
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    // if you are using the devToolsExtension, you can add it here also
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


ReactDOM.render(
  <ApolloProvider client={ client } store={ store }>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
)
