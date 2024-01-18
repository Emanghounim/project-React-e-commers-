import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { Audio } from 'react-loader-spinner'

export default function Regester() {
  const reg = /^011[0-9]{8}$/
  // const regxpass = /^[A-Z]{7}[a-z]{7}$/
  const validationSchema = yup.object({
    name: yup
      .string().
      required("name is required")
      .min(3, "min chracter is 3")
      .max(10, "max chracter is 10 ")
    ,
    email: yup
      .string()
      .email()
      .required("email is requied"),
    phone: yup
      .string()
      .required("enter the phone")
      .matches(reg, "01-1250-0:9"),
    password: yup
      .string()
      .required("pass is required")
      .min(5, "min lenght five character")
      .max(10, "max lenght ten character")
    ,
    rePassword: yup
      .string().oneOf([yup.ref("rePassword", "repassword not match password")])
      .required("repasswored is requierd")

  })
  const navgite = useNavigate()
  let [error, seterror] = useState(null)
  let [lodening, setlodening] = useState(null)

  async function submitValue(values) {
    setlodening(true)
    let data = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .catch((eror) => {
        setlodening(false)
        seterror(eror.response.data.message)
      })
    if (data.data.message === "success") {
      setlodening(false)
      navgite("/Home")
    }

  }

  const usevalue = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: ""
  }
  const formikObject = useFormik(
    {
      initialValues: usevalue,
      validationSchema,
      onSubmit: submitValue


    })
  return <>

    <div className="w-75 py-4 mx-auto">
      {error ? <div className="alert bg-danger">{error}</div> : ""}
      <h2 className=' py-2 m-2'> Register now</h2>
      <form className='m-auto  ' onSubmit={formikObject.handleSubmit}>
        <div className=" ">
          <label htmlFor="name" className='p-2'>Enter Name :</label>
          <input type="text" onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} name='name' className="form-control mb-3" id="name" placeholder="name" />
          {formikObject.errors.name && formikObject.touched.name ? <p className='alert fs-bold alert-danger text-start'>{formikObject.errors.name}</p>
            : ""}

        </div>
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
        <div className="">
          <label htmlFor="rePassword" className='p-2'>re-Password :</label>
          <input type="password" onChange={formikObject.handleChange} name='rePassword' className="form-control mb-3" id="rePassword" placeholder="rePassword" />
          {formikObject.errors.rePassword && formikObject.touched.rePassword ? <p className='alert fs-bold alert-danger text-start'>{formikObject.errors.rePassword}</p> : ""}
        </div>
        <div className=" mb-3">
          <label htmlFor="Phone" className='p-2'>Phone: </label>
          <input type="tel" onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} name='phone' className="form-control mb-3" id="Phone" placeholder="Phone" />
          {formikObject.errors.phone && formikObject.touched.phone ? <p className='alert fs-bold alert-danger text-start'>{formikObject.errors.phone}</p> : ""}
        </div>
        {lodening ?
          <button type="button" className="btn btn-outline-success">
            <Audio
              height="25"
              width="55"
              color='white'


              wrapperStyle
              wrapperClass
            />
          </button> :
          <button disabled={!(formikObject.isValid && formikObject.dirty)} type="submit" className="btn btn-outline-success">Register</button>

        }

      </form>
    </div>
  </>
}

