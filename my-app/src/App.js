

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './component/home/Home'
import Proview from './component/proview/Proview'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './component/view/View';
import About from './component/about/About';
import Contact from './component/contact/Contact';



function App() {
  return (
    <div>

      <Routes>

        <Route element={<Home />} path='/' />
        <Route element={<Proview />} path='/proview' />
        <Route element={<View />} path='/view/:id' />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='/contact' />

      

      



      </Routes>

      
      
    </div>
  )
}

export default App

