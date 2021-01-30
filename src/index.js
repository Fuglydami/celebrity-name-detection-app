import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppProvider } from './contextApi'
import App from './App'
import 'tachyons'
import 'react-particles-js'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
