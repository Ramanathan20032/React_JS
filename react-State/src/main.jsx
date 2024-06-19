import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FavoriteColor from './components/FavoriteColor.jsx'
import Car from './components/car.jsx'
import Scooter from './components/Scooter.jsx'
import Count from './components/count.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteColor />
    <Car />
    <Scooter />
    <Count/>
  </React.StrictMode>,
)
