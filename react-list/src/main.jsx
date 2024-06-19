import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Garage from './components/Garage.jsx'
import Products from './components/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Garage />
    <Products/>
  </React.StrictMode>,
)
