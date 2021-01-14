import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import { loadState, saveState } from './localStorage'
import reducer from './store/reducers'
import reportWebVitals from './reportWebVitals'

const persistedState = loadState()
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(thunk, logger)
)

store.subscribe(() => {
  saveState({
    nominations: store.getState().nominations
  })
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
