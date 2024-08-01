import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
// import { Provider } from 'react-redux'
// import store from './store/store'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
