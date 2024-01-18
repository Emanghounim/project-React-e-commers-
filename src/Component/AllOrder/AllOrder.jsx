import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
export default function AllOrder() {

    let [userOrder, setUserOrder] = useState(null)

    useEffect(() => {
        let id = jwtDecode(localStorage.getItem("use token"))
         Order(id.id)
    }, [])

    async function Order(Id) {
        try {

            const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${Id}`)
            let res = response.data
            console.log(res);
            // setUserOrder(res)
        } catch (error) {
            console.log("error");
        }

    }

    if (userOrder == null) {

        return <>
            <div className="container">
                <div className="row"><div className="col-md-12 vh-100 w-100 backGround d-flex justify-content-center align-items-center  ">
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
                </div>
            </div>
        </>
    }

    return <>
        <div className="container">

            <div className="row">

                {userOrder.map(function (order, idx) {
                    <div key={idx} className="col-md-6">
                        <div className="order  p-4 bg-success m-5">

                            <h2>Your Total Prise : {order} EGP</h2>
                        </div>
                    </div>
                })} 
            </div>
        </div>
    </>
}