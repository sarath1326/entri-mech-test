

import React from 'react'
import "./Cart.css"
import Nave from '../nave/Nave'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {

  const [show, setShow] = useState([])


  const profetch = (idarrya) => {

    return new Promise((resolve, reject) => {

      let arrya = []

      for (let i of idarrya) {

        const promise = axios(`https://fakestoreapi.com/products/${i.productId}`).then((ret) => {

          let obj = {

            proid: ret.data.id,
            title: ret.data.title,
            price: ret.data.price,
            image: ret.data.image,
            quantity: i.quantity

          }
          // arrya.push(obj)
          return obj
        })

        arrya.push(promise)
      }

      Promise.all(arrya).then((result) => {

        resolve(result)
      }).catch(err => {

        reject(err)
      })

    })

  }




  useEffect(() => {

    axios("https://fakestoreapi.com/carts/user/1").then((respo) => {

      let arrya = []
      let mixed = []

      const result = respo.data


      for (let i of result) {

        for (let j of i.products) {

          mixed = arrya.concat([...mixed, j])
        }


      }

      console.log(mixed)
      profetch(mixed).then((resolv) => {

        setShow(resolv)

      }).catch(err => {

        console.log(err)

      })



    })




  }, [])


  const cartCountIncriment = (index) => {

    show[index].quantity += 1

    setShow([...show])

  }

  const cartCountDecrement = (index) => {

    show[index].quantity -= 1

    setShow([...show])

  }




  return (
    <div>
      <Nave />

      <div className='cart-main' >
        <div className='container cart-inner-main' >
          <p className='cart-title' > Your Cart </p>

          <div className='cart-show-main'>


            {


              show.map((obj, index) => (

                <div className='cart-data'>

                  <div className='cart-img-div' >

                    <img style={{ width: "100%", height: "100%" }} src={obj.image} alt="" />

                  </div>

                  <div className='cart-text' >

                    <p className='cart-title-head' > {obj.title} </p>

                    <p> <FaIndianRupeeSign /> {obj.price} </p>

                    <p className='cart-title-head' > Quantity:  {obj.quantity}  </p>

                    <button onClick={() => { cartCountIncriment(index) }} className='cart-btn' > + </button   >   <button onClick={() => { cartCountDecrement(index) }} className='cart-btn' > - </button>

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
