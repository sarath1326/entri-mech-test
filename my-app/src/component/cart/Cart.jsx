

import React from 'react'
import "./Cart.css"
import Nave from '../nave/Nave'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {

  const [show,setShow]=useState([])
  

  const profetch = (idarrya) =>{

     return new Promise((resolve, reject) =>{

      let arrya =[]

         for (let i of idarrya){

       axios(`https://fakestoreapi.com/products/${i.productId}`).then((ret) => {

       let obj = {

          proid:ret.data.id , 
          title:ret.data.title,
          price:ret.data.price,
          image:ret.data.image,
          quantity: i.quantity
       
        }

        arrya.push(obj)
      
      })
    }
    resolve(arrya)

      })
  
  }




  useEffect(() => {

    axios('https://fakestoreapi.com/carts/1').then((respo) => {

      const data = respo.data.products
      
      profetch(data).then((result)=>{

        console.log(result)
        
        setShow(result)
        
       }).catch(err=>{

          console.log(err)
      })
    
    })
  
  }, [])

  return (
    <div>
      <Nave />

      <div className='cart-main' >
        <div className='container cart-inner-main' >
          <p className='cart-title' > Your Cart </p>

          <div className='cart-show-main'>


            {

              
              show.map((obj) => (

                <div className='cart-data'>

                  <div className='cart-img-div' >

                    <img style={{ width: "100%", height: "100%" }} src={obj.image} alt="" />

                  </div>

                  <div className='cart-text' >

                    <p className='cart-title-head' > {obj.title} </p>

                    <p> <FaIndianRupeeSign /> {obj.price} </p>

                    <p className='cart-title-head' > Quantity:  {obj.quantity}  </p>

                    <button className='cart-btn' > + </button  >   <button className='cart-btn' > - </button>

                  </div>


                </div>



              ))

             

              
            }







          </div>




        </div>






      </div>

    </div>
  )
}

export default Cart
