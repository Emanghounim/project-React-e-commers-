import { jwtDecode } from 'jwt-decode'
import React from 'react'

export default function Profile() {


const profile=jwtDecode(localStorage.getItem("use token"))


  return <>
  <div className="container">
  <div className="row">
    <div className="col-md-12 m-5 p-5">
  <h1 className='text-center text-success'> Hello {profile.name}</h1>
  </div>
  </div>
  </div>
  </>
}
