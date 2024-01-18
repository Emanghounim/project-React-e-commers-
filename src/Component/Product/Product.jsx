import axios from 'axios';
import { useContext } from 'react';
import { Circles } from 'react-loader-spinner'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';

export default function Product() {
let {getCart}=useContext(CartContext)

async function addProductToCart(id){
 let data = await  getCart(id)
 console.log(data);
if(data.data.status==="success"){
    toast.success('product successflly adding',{ duration:2000,
    })
}
    else{
        toast.error('error product adding ',{
            duration:2000,
            position: 'top-center',
        })

    }





}


    function getAllProduct() {

        return axios.get("https://ecommerce.routemisr.com/api/v1/products")

    }

    const { data, isError, isFetching, isLoading,refetch } = useQuery("allProduct", getAllProduct,{


    });


    return <>
        {isLoading ? <div className="container">
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
        </div> : <div className="container ">
            <div className="row gy-3 ">
                {data?.data.data.map(function (product) {
                    return <div key={product.id} className="col-md-3 product">          
                                  <div className="products text-center">

                        <Link to={`/ProductDetails/${product.id}`}>
                            <img src={product.imageCover} alt="product img" className='w-100' />
                            <h6 className='main-color'>{product.category.name}</h6>
                            <h5>{product.title.split("").slice(0, 7).join("")} </h5>
                            <div className="item d-flex justify-content-evenly">
                                <span>{product.price} EGP</span>
                                <p> {product.quantity}<i className="fa-solid fa-star bg-color"></i></p>
                            </div>
                       </Link> 
                       <button className=' btn btn-outline-success   w-50' onClick={()=>addProductToCart(product.id)}> +add</button>
                         </div> 
                        
                    </div>
                })}
            </div>
        </div>
        }

    </>
}

