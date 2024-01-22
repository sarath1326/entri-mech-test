

import React from 'react'
import "./Nave.css"

import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from "../../contextapi/Cart"



function Nave() {

    const navigate=useNavigate()
    const {count}=useContext(CartContext)


    return (
        <div>

            <div className="heading-main">


                <div className="navbox-main">

                    <div className="navbox-logo">
                        <img className='nav-logo-image' src="../currease logo 1.png" alt="heloo" />
                    </div>

                    <div className="navbox-option-mainbox">

                        <span style={{color:"blue"}} className='navbox-opt-text' onClick={()=>{navigate("/")}}  > Home </span>
                        <span className='navbox-opt-text' onClick={()=>{navigate("/about")}} > About us </span>
                        <span className='navbox-opt-text' onClick={()=>{navigate("/contact")}} > Contact us </span> 
                        <span className='navbox-opt-text' > Cart </span>
                        <div className='cart-cout' >{count} </div>

                        <button className='shop-btn-new' onClick={()=>{navigate("/proview")}}  > Shop <BiShoppingBag /> </button>

                    


                    </div>


                </div>

            </div>



        </div>
    )
}

export default Nave
