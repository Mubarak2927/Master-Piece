import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { Outlet } from 'react-router-dom'
import Landingpage from '../Pages/Landingpage'

function Layout() {
  return (
    <>
    <div className='flex flex-col h-[100vh] w-[100%]'>
       <Header/>
       <div className='flex-1 w-[100%]'>
        <Outlet/>
      
       </div>
       <Footer />
    </div>
    
    
    
    </>
  )
}

export default Layout