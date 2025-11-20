import React from 'react'
import Navbar from './components/Navbar'

import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import './index.css'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path="/" element={<Home/>} />
    </Routes>
   

    </>
  )
}

export default App