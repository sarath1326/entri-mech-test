

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

                        <span style={{color:"blue"}} className='nave-opt-text'> Home  </span>
                        <span className='nave-opt-text'> About us </span>
                        <span className='nave-opt-text'> Contact us  </span>
                        <span className='nave-opt-text'> Cart <div className='cart-cout'> {count} </div>  </span>

                        <button onClick={()=>{navigate("/proview")}} className='shop-btn'> Shop  <BiShoppingBag /> </button>

                        

                    </div>


                </div>

            </div>



        </div>
    )
}

export default Nave
