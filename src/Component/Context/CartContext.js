import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext()

var useToken = localStorage.getItem("use token")
var headers={token:useToken}
/////////////////getcart//////////////////////////
function getCart(id) {
    return axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
        productId: id
    }, {
        headers
    }).then((respone) => respone)
    .catch((error) => error)
}
//////////////////loggedCart/////////////////////////
async function getLoggedCart(){
return axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers
}).then((response)=>response).catch((erorr)=>erorr)
}
/////////////////////////////////////////////////////
async function removeCart(productId){
return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
    headers
}).then((response)=>response).catch((erroe)=>erroe)

}
////////////////////////////////////////////////
async function updateCart(id,count){

return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
{count},{headers}).then((response)=>response).catch((erroe)=>erroe)
}
/////////////////////////////////////////////////////
async function clearItem(){
return axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
    headers}).then((response)=>response).catch((erroe)=>erroe)
}


////////////////////////////////////////////////

export default function CartContextProvider(props) {
const [cardId,setcardId]=useState(null)
async function getIdCart(){ 
  let {data}=await  getLoggedCart()
  setcardId(data?.data._id) 
}

useEffect(()=>{
    getIdCart()
   
},[])





    return <CartContext.Provider value={{ cardId,getCart ,getLoggedCart,removeCart ,updateCart,clearItem}}>

        {props.children}


    </CartContext.Provider>
} 