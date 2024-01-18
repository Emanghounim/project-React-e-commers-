import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetails() {
    let param = useParams();

    function getProductDetails(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }

    let { data, isLoading, isError } = useQuery("productDetails", () => getProductDetails(param.id), {

    })

    let {getCart}=useContext(CartContext)

 

    async function addProductToCart(id){
        let data = await  getCart(id)
       if(data?.data.status==="success"){
           toast.success('product successflly adding',{duration:1000})
       }
           else{
               toast.error('error product adding ',{
                   duration: 2000,
                   position: 'top-center',
               })
       
           }
       
       
       
       
       }
       
    return <>

        <div className="container m-5">
            {data?.data.data ? <div className="row text-center">
                <div className="col-md-3 align-item-center">
                    <img src={data?.data.data.imageCover} alt={data?.data.data.title} className='w-100' />
                </div>
                <div className="col-md-8">
                    <div className="productDetails">
                        <h5>{data?.data.data.title}</h5>
                        <p>{data?.data.data.description}</p>
                        <p className='main-color'>{data?.data.data.category.name}</p>
                        <p className=''>Price:{data?.data.data.price}EGP</p>

                        <button onClick={()=> addProductToCart(data?.data.data.id)} className='btn btn-success w-100  m-3  text-white ' >+add to Cart </button>
                    </div>
                </div>
            </div> : ""
            }



        </div>

    </>
}
