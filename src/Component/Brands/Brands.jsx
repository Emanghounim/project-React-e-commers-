import axios from 'axios'
import React, { useEffect } from 'react'
import imge from './img/pexels-burak-başgöze-15673587.jpg'
import imge1 from './img/pexels-henry-&-co-3222146.jpg'
import imge3 from './img/pexels-wolrider-yurtseven-18368130.jpg'
export default function Brands() {


async function getAllPrand(){

let data=await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
console.log(data);
}


useEffect(()=>{
  getAllPrand()
},[])

  return <>
  <div className="container">
<h1 className='text-success fs-1 fw-bold  text-center m-4 '> All Brands </h1>

 

<div className="row gy-2">

<div className="col-md-4">
  <div className="item text-center">

<img src={imge3} alt="zara" className='w-100 img-fluid '/>

<div className="item-1  border-0">
<h3 >Zara</h3>
</div>

  </div>
</div>
<div className="col-md-4">
  <div className="item text-center">

<img src={imge1} alt="zara" className='w-100' />

<div className="item-1  border-0">
<h3 >active</h3>
</div>

  </div>
</div>
<div className="col-md-4">
  <div className="item text-center">

<img src={imge3} alt="zara" className='w-100'/>

<div className="item-1  border-0">
<h3  className=''>Puma</h3>
</div>

  </div>
</div>
</div>
<div className="row gy-2">

<div className="col-md-4">
  <div className="item text-center">

<img src={imge3} alt="zara" className='w-100'/>

<div className="item-1  border-0">
<h3 >Zara</h3>
</div>

  </div>
</div>
<div className="col-md-4">
  <div className="item text-center">

<img src={imge1} alt="zara" className='w-100' />

<div className="item-1  border-0">
<h3 >active</h3>
</div>

  </div>
</div>
<div className="col-md-4">
  <div className="item text-center">

<img src={imge3} alt="zara" className='w-100'/>

<div className="item-1  border-0">
<h3  className=''>Puma</h3>
</div>

  </div>
</div>
</div>
<div className="row gy-2">

<div className="col-md-4">
  <div className="item text-center">

<img src={imge3} alt="zara" className='w-100'/>

<div className="item-1  border-0">
<h3 >Zara</h3>
</div>

  </div>
</div>
<div className="col-md-4">
  <div className="item text-center">

<img src={imge1} alt="zara" className='w-100' />

<div className="item-1  border-0">
<h3 >active</h3>
</div>

  </div>
</div>
<div className="col-md-4">
  <div className="item text-center">

<img src={imge3} alt="zara" className='w-100'/>

<div className="item-1  border-0">
<h3  className=''>Puma</h3>
</div>

  </div>
</div>
</div>
 </div>
  </>
}