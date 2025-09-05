import React, { useState } from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './userdetails/Login'
import { Sign } from './userdetails/Sign'
import Landingpage from './Pages/Landingpage'
import Customersupport from './Pages/Customersupport'
import About from './Pages/About'
import Categories from './Pages/Categories'
import Productlists from './Pages/Productlists'
import Buynow from './Pages/Buynow'
import Productdetails from './Pages/Productdetails'
import CartContent from './Pages/CartContent'








function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Sign' element={<Sign/>}/>
      <Route path='/Contact' element={<Customersupport/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Categories' element={<Categories/>}/>
      <Route path='/Product_lists' element={<Productlists />}/>
     <Route path='/Buy' element={<Buynow/>}/>
     <Route path='/Product_Details' element={<Productdetails />}/>
     <Route path='/Add-to-cart' element={<CartContent/>}/>
    
     </Route>
      

    






    </Routes>
    
    
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}

export default App

