import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import User from './Components/User'
import OldBooks from './Components/OldBooks'
import NewBooks from './Components/NewBooks'
import DashBoard from './Components/DashBoard'
import Login from './Components/Login'

function App() {
  	return (
		<div className="app">
			{/* React Router Setup */}
			<BrowserRouter>
				{/* Handling Router Links*/}
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					{/* Route Parameter */}
					<li><Link to="/user/1">User1</Link></li>
					<li><Link to="/user/2">User2</Link></li>
					{/* Nested Router */}
					<li><Link to='/Books/old_books'>Old Books</Link></li>
					<li><Link to='/Books/new_books'>New Books</Link></li>
					{/* Navigating Programmatically */}
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/dashBoard">dashBoard</Link></li>
				</ul>
				<Routes>
					{/* path = 'in the url' ; element = {component Name} */}
					<Route path='/' element={<Home/>}/>
					<Route path='/about' element={<About/>}/>
					<Route path='/contact' element={<Contact/>}/>
					{/* Route Parameter */}
					{/* /:id Indicating the parameter id going to coming */}
					{/* Multiple id is going to be manipulated by single router */}
					<Route path='/user/:id' element={<User/>}/>
					{/* Nested Router */}
					{/* parent path */}
					<Route path='/Books'>
						{/* Child Path */}
						<Route path='old_books' element={<OldBooks/>}/>
						<Route path='new_books' element={<NewBooks/>}/>
					</Route>
					{/* Navigating Programmatically */}
					<Route path='/login' element={<Login/>}/>
					<Route path='/dashBoard' element={<DashBoard/>}/>
				</Routes>
			</BrowserRouter>
		</div>
  	)
}

export default App;
