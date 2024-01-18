
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
// import React, { useState } from 'react'
import Layout from './Layout/Layout';
import Home from'./Component/Home/Home';
import Register from './Component/Regester/Register';
import Product from './Component/Product/Product'
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Brands from './Component/Brands/Brands';
import Login from './Component/Login/Login';
import WishList from'./Component/WishList/WishList'
import Catrgories from './Component/Catrgories/Catrgories'
import Notfound from './Component/Notfound/Notfound';
// import  { UserContext } from './Component/Context/Usercontext';
// import { useEffect } from 'react';
// import { useContext } from 'react';
import ProdectedRoute from './Component/ProdectedRoute/ProdectedRoute';
import HomeSlider from './Component/HomeSlider/HomeSlider';
import CartContextProvider from './Component/Context/CartContext';
import { Toaster } from 'react-hot-toast';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import Payment from './Component/Payment/Payment';
import AllOrder from './Component/AllOrder/AllOrder';
let rotet =createBrowserRouter([
  {
path:"/",element:<Layout/>
, children:[
  {index:true,element: <ProdectedRoute><Home/></ProdectedRoute>},

{path:"Catrgories",element: <ProdectedRoute><Catrgories/></ProdectedRoute>},
{path:"ProductDetails/:id",element: <ProdectedRoute><ProductDetails/></ProdectedRoute>},
{path:"product",element: <ProdectedRoute><Product/></ProdectedRoute>},
{path:"cart",element: <ProdectedRoute><Cart/></ProdectedRoute>},
{path:"Profile",element: <ProdectedRoute><Profile/></ProdectedRoute>},
{path:"Payment",element: <ProdectedRoute><Payment/></ProdectedRoute>},
{path:"HomeSlider",element: <ProdectedRoute><HomeSlider/></ProdectedRoute>},
// {path:"wishlist",element: <ProdectedRoute><WishList/></ProdectedRoute>},
{path:"brand",element: <ProdectedRoute><Brands/></ProdectedRoute>},
{path:"allOrder",element: <ProdectedRoute><AllOrder/></ProdectedRoute>},

{path:"*",element:<Notfound/>},
{path:"login",element:<Login/>},
{path:"register",element:<Register/>},
]}
])

export default function App() {
  // const {useToken,setuseToken}=useState();
  // const {setuseToken}=useContext(UserContext)
  // useEffect(()=>{
  //   if(localStorage.getItem("use token")!==null) 
  // {setuseToken(localStorage.getItem("use token"))}
  //  },[])
  // useEffect(() => {
  //   const setUseToken=setUseToken
  //   if (localStorage.getItem("use token") !== null) {
  //     setUseToken(localStorage.getItem("use token"));
  //   }
  // }, [setUseToken]);
  return <>
<CartContextProvider>
   <RouterProvider router={rotet} /> 
</CartContextProvider>
<Toaster/>
   </>
}
