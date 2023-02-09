import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SysContext } from './context/SystemContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SysContext>
        <App />
      </SysContext>
    </BrowserRouter>
  </React.StrictMode>,
)
