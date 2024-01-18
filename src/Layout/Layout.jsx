import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import Home from '../Component/Home/Home'
export default function Layout() {

  return <>

   <Navbar/>
  <Outlet/>
  <Footer/> 
  
  
 
  
  </>}
