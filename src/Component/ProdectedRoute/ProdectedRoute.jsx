import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProdectedRoute(props) {
    if (localStorage.getItem("use token") !== null) {
        return<>
     
    {    props.children}
        </>
    }
    else {
        return <Navigate to={"./Login"} />

    }

}