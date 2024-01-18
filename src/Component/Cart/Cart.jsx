import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

export default function Cart() {


  let { getLoggedCart, removeCart, updateCart,clearItem } = useContext(CartContext)
  let [cartDetails, setcartDetails] = useState(null)
///////////////////////////////////////////////
  async function updataCrtCount(count, id) {
    let { data } = await updateCart(count, id);
    setcartDetails(data)

  }
/////////////////////////////////////////////

  async function deleteCart(id) {
    let { data } = await removeCart(id)
    setcartDetails(data)

  }
  ////////////////////////////////////////////
  async function getItem() {
    let { data } = await getLoggedCart();
    setcartDetails(data)
  }
////////////////////////////////////////////////////
async function clearProduct(){
await clearItem()
setcartDetails()
}


  useEffect(() => {
    getItem();
  }, [])


  return <>
  
  <div className="container">
  {cartDetails ? <div className="container bg-Light ">
    <div className="row  p-3 ">
      <h3 className='text-center text-success m-3'>Cart Shop</h3>
      <h5>Cart Items: {cartDetails.numOfCartItems}</h5>
     { console.log(cartDetails.numOfCartItems)}
      <h5 className=''>Cart Items Price :{cartDetails.data.totalCartPrice} EGP</h5>
      <div className="item-group d-flex align-items-center justify-content-between ">  
      <div  onClick={()=> clearProduct()} className="btn btn btn-outline-primary text-center"> Clear All Item</div>
      
      <Link to="/Payment" className="btn btn btn-outline-primary text-center">Pay the Order</Link>
      </div>
    </div>
    {cartDetails.data.products.map((product) => <div key={product.product.id} className="row m-2 ">
      <div className="col-md-1 mb-2 border-bottom">
        <img className='w-100 rounded-3' src={product.product.imageCover} alt="imge" />
      </div>
      <div className="col-md-11 ">
        <div className="item d-flex align-items-center justify-content-between">
          <div className='align-items-center'>
            <h6 className='text-Warning'>Product Title:{product.product.title}</h6>
            <h6 className='text-Warning'>Product Price:{product.price} EGP</h6>
          </div>
          <div>
            <button onClick={() => updataCrtCount(product.product.id, product.count + 1)} className='btn bg-light'>+</button>
            <span className='m-1'>{product.count}</span>
            <button onClick={() => updataCrtCount(product.product.id, product.count - 1)} className='btn bg-light'>-</button>

          </div>
        </div>

        <button onClick={() => deleteCart(product.product.id)} className='btn '> <i className="fa-solid fa-trash p-1 text-danger font-sm"></i>Remove </button>
      </div>
    </div>)}

  </div> : ""}
</div>
  </>

}
