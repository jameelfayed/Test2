import React from 'react'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Users from './Users'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='*' element={<h2>Page Not Found</h2>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App