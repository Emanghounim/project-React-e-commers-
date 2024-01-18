import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

export default function Navbar() {

  let { useToken, setuseToken } = useContext(UserContext)
  let {numOfCartItems}=useContext(CartContext);
  let navegate = useNavigate()
  function logout() {
    localStorage.removeItem("use token", null)
    setuseToken(null)
    navegate("./Login")
  }
  return <>
    <div className='bg-light'>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className=" d-flex justify-content-around text-black">
            <div className="navbar">
              <h1><Link className='navbar-brand text-balck fs-3' to="fresh cart">
                <i className="fa-solid fa-cart-shopping text-success p-0"></i>
                Frach Cart </Link></h1>
            </div>


            {useToken !== null ? <>
              <div className="navbar ">
                <Link className="navbar-brand text-black fs-5" to="/">Home</Link>
                <button className="navbar-toggler  text-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon text-black "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto  mb-lg-0">

                    <li className="nav-item">
                      <Link className="navbar-brand text-black fs-5 " to="wishList">wish List</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand text-black fs-5" to="Product">Product</Link>
                    </li>
                 
                    <li className="nav-item">
                      <Link className="navbar-brand text-blackfs-5 " to="catrgories">catrgories</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand text-black fs-5 " to="brand">Brands</Link>
                    </li>
                    <li className="nav-item position-relative">
                      <i className="fa-solid fa-cart-shopping p-2 ">
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  
    <span className="visually-hidden">unread messages</span>
  </span>
{numOfCartItems}
 </i>

                      <Link className="navbar-brand text-black fs-5 " to="Cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand text-black fs-5" to="allOrder">All Order</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand text-black fs-5 " to="Profile">Profile</Link>
                    </li>
                  </ul>

                </div>
              </div>

            </> : ""}


            <div className="navbar ">
              <ul className='navbar-nav ms-auto'>
                {/* <div className="icon ">
                  <i className="fa-brands fa-facebook p-2"></i>
                  <i className="fa-brands fa-instagram p-2" ></i>
                  <i className="fa-brands fa-twitter p-2" ></i>
                  <i className="fa-brands fa-youtube p-2" ></i>
                </div> */}

                 {useToken !== null ? <>
                  <li className="nav-item ">
                    <Link className="navbar-brand text-black fs-5  me-3" to="Register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand text-black fs-5 " to="Login">LogIn</Link>
                  </li></> : ""}
            

                {useToken == null ? <>  <li className="nav-item">


                  <span onClick={() => logout()} className="navbar-brand text-black fs-5"> LogOut</span>
                </li>
                </> : ""} 


              </ul>
            </div>
          </div>
        </nav>



      </div>
    </div>





  </>
}
