import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Scooter from './component/Scooter.jsx'
import Car from './component/Car.jsx'
import List from './component/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Scooter />
    <Car />
    <List />
  </React.StrictMode>,
)
