import React from 'react'
import DOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './components/App'

require('./styles.scss')

const store = createStore(reducer)

DOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)