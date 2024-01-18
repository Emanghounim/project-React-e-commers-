import React from 'react'
import Product from '../Product/Product'
import HomeSlider from '../HomeSlider/HomeSlider'
import CatagorySlide from '../CatagorySlide/CatagorySlide'
import useNetwork from '../Network/Network'
import Footer from "../Footer/Footer"

export default function Home() {
  let x=useNetwork()
  return<>



{x}
  <HomeSlider/>
 <CatagorySlide/>
<Product/>
 
 
</>
}
