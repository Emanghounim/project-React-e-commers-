import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Payment() {
    let {cardId } = useContext(CartContext)

    async function cashPayMent() {

        const city = document.getElementById("city").value
        const phone = document.getElementById("phone").value
        const Details = document.getElementById("Details").value

        let shippingAddress = {
            "shippingAddress": {
                "details": Details,
                "phone": phone,
                "city": city
            }
        }

        try {
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cardId}`, { shippingAddress }, {
                headers:{ token:localStorage.getItem("use token") }
            }) 
            if(data.status==="success"){
                toast.success("product susseccfully ")
              
            }  else{
                toast.error("product is error ")
               
                }

        } catch (error) {
            console.log("error");
        }

    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="containt m-5 p-5">
                        <form action="">
                            <label htmlFor="">
                                Phone
                            </label>

                            <input type="tel" className='form-control mb-3 ' placeholder='phone' id='phone' />


                            <label htmlFor="">
                                City
                            </label>

                            <input type="text" className='form-control mb-3' placeholder='City' id='city' />
                            <label htmlFor="">
                                Details
                            </label>
                            <textarea type="text" className='form-control  mb-3' placeholder='Details' id='Details'></textarea>

                            <button type='button' onClick={cashPayMent} className='btn btn-outline-success' > Confirm Cash Payment </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>


}