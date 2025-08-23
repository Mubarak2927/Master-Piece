import React from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './userdetails/Login'
import { Sign } from './userdetails/Sign'
import Landingpage from './Pages/Landingpage'
import Customersupport from './Pages/Customersupport'
import About from './Pages/About'
// import ProductDetails from './Pages/Productdetails'
import Categories from './Pages/Categories'
import Productlists from './Pages/Productlists'
import Catitems from './Pages/Cartitems'
import Buynow from './Pages/Buynow'







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
      <Route path='/Product-lists' element={<Productlists/>}/>
      <Route path='/Cartitems' element={<Catitems/>}/>
     <Route path='/Buy' element={<Buynow/>}/>
     </Route>
      

    






    </Routes>
    
    
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}

export default App

// import Mens from '../src/Collections/Mens'
// import Womens from '../src/Collections/Womens'
// import Wedding from '../src/Collections/Wedding'
// import Shoes from '../src/Collections/Shoes'
// import Sports from '../src/Collections/Sports'
// import Jewels from '../src/Collections/Jewels'
// import Chocolates from '../src/Collections/Chocolates'
// import Casual from '../src/Collections/Casual'
// import Formal from '../src/Collections/Formal'
// import Electronics from '../src/Collections/Electronics'
// import Perfume from '../src/Collections/Perfume'
// import Kids from '../src/Collections/Kids'






// <Route path='/Mens' element={<Mens/>}/>
//       <Route path='/Kids' element={<Kids/>}/>
//       <Route path='/Formal' element={<Formal/>}/>
//       <Route path='/Casual' element={<Casual/>}/>
//       <Route path='/Womens' element={<Womens/>}/>
//       <Route path='/Choco' element={<Chocolates/>}/>
//       <Route path='/Sports' element={<Sports/>}/>
//       <Route path='/Electronics' element={<Electronics/>}/>
//       <Route path='/Wedding' element={<Wedding/>}/>
//       <Route path='/Jewels' element={<Jewels/>}/>
//       <Route path='/Shoes' element={<Shoes/>}/>
//       <Route path='/Perfume' element={<Perfume/>}/>