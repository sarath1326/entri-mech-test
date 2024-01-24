

import React from 'react'
import "./View.css"
import Nave from '../nave/Nave'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState,useEffect } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import {CartContext} from "../../contextapi/Cart"
import { useContext } from 'react';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';




function View() {

  const {id}=useParams()
  const [res,setres]=useState({})
  const {count,setcount}=useContext(CartContext)
  const navigate=useNavigate()
  

  useEffect(()=>{

    axios(`https://fakestoreapi.com/products/${id}`).then((respo)=>{

    setres(respo.data)
    console.log(respo.data)

    }).catch(err=>{

        alert(err)
    })


  },[])

  const cartadd=(proid)=>{

         setcount(count+1)
         console.log(proid)

         axios.post("https://fakestoreapi.com/carts",{ 
          
         userId:1,
         date:"2020-02-03",
         products:[{productId:proid,quantity:1}]}
         
        
         ).then((respo)=>{

            console.log("pro add",respo.data)
         
          }).catch(err=>{

            console.log("err")
         })
         
        
          }



  
  
  return (
    <div>
        
        <Nave />
        <div className='view-main'>
          <div className='container view-innerbox'>
            <button className='view-bak-btn' onClick={()=>{navigate("/proview")}}  > <FaLongArrowAltLeft />   Back to products </button>

            <div className='view-det-main' >
              <div className='view-img-main' >

                   <img style={{width:"300px",height:"300px"}} src={res.image}  alt="" />

              </div>

              <div className='view-text'>

                <button className='view-text-btn'> New </button>
                <h3> {res.title}</h3>
                <p> Description : </p>
                <p> {res.description}</p>
                <FaIndianRupeeSign /> {res.price}

                <div className='view-demo-img-main'> 

                <div className='view-demo-img' >

                  <img className='view-demo-image'  src={res.image} alt="" />


                </div>

                <div className='view-demo-img' >

                <img className='view-demo-image'  src={res.image} alt="" />

                  </div>

                  <div className='view-demo-img' >

                  <img className='view-demo-image'  src={res.image} alt="" />


                    </div>
                    
                    </div>

                    <button className='view-b-c-btn' > Buy Now <MdOutlineArrowOutward /> </button>
                    
                    <button className='view-b-c-btn' onClick={()=>(cartadd(res.id))}   > Add Cart <MdOutlineArrowOutward /> </button>

                
              
              
              </div>


            </div>


            <div className='footer-logo-main' >

              <img style={{width: "200px", height: "100px" }} src="../currease logo 1.png " alt="" />


            </div>


            <Footer />




          </div>

          




        </div>

        

        



        
        
        
        
        
        </div>
  )
}

export default View
