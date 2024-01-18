import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { BallTriangle } from 'react-loader-spinner'
import { useContext } from 'react'
import { UserContext } from '../Context/Usercontext'

export default function Login() {
  let {setuseToken}= useContext(UserContext )

  const validationSchema = yup.object({

    email: yup
      .string()
      .email()
      .required("email is requied"),

    password: yup
      .string()
      .required("pass is required")
      .min(5, "min lenght five character")
      .max(10, "max lenght ten character")
    ,

  })
  const navgite = useNavigate()
  let [error, seterror] = useState(null)
  let [lodening, setlodening] = useState(null)

  async function loginvalue(values) {


    setlodening(true)
    let data = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((eror) => {
        setlodening(false)
        seterror(eror.response.data.message)
      })
    if (data.data.message === "success") {
      setlodening(false)
localStorage.setItem("use token",data.data.token)
setuseToken(data.data.token)
      navgite("/")
    }

  }

  const usevalue = {

    email: "",
    password: "",


  }
  const formikObject = useFormik(
    {
      initialValues: usevalue,
      validationSchema,
      onSubmit: loginvalue


    })
  return <>

    <div className="w-75 py-4 mx-auto">
      {error ? <div className="alert bg-danger">{error}</div> : ""}
      <h2 className=' py-2 m-2'> LogIn Now</h2>
      <form className='m-auto  ' onSubmit={formikObject.handleSubmit}>

        <div className=" mb-3">
          <label htmlFor="email" className='p-2'>email :</label>
          <input type="email" onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} name='email' className="form-control mb-3" id="email" placeholder="name@example.com" />
          {formikObject.errors.email && formikObject.touched.email ? <p className='alert fs-bold alert-danger text-start'>{formikObject.errors.email}</p> : ""}
        </div>
        <div className="">
          <label htmlFor="password" className='p-2'>Password :</label>
          <input type="password" onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} name='password' className="form-control mb-3" id="password" placeholder="Enter Password" />
          {formikObject.errors.password ? <p className='alert fs-bold alert-danger text-start'>{formikObject.errors.password}</p> : ""}
        </div>

        <p>forget your password ?</p>
        {lodening ?
          <button type="button" className="btn btn-outline-success">
          <BallTriangle
  height={25}
  width={50}
  radius={4}
  color="white"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
          </button> :<>
<button disabled={!(formikObject.isValid && formikObject.dirty)} type="submit" className="btn btn-outline-success m-2">Login</button><Link className='btn' to={"/Register"}> Registration Now </Link>
</>
        }

      </form>
    </div>
  </>
}
