import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App'

import './index.scss'
import { Provider } from 'react-redux'
import store from '../src/store'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
