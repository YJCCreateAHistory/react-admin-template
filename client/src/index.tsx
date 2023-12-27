import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { Provider } from 'react-redux'
import store from './redux'
import './index.less'
const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
)
