import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRoute} from 'react-hook-form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRoute>
    <App />
    </BrowserRoute>
  </React.StrictMode>
)
