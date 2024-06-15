import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Garage from './components/Garage.jsx'

// props - Sending properties to the components from another components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Garage />
  </React.StrictMode>,
)
