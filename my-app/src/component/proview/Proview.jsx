


import React from 'react'
import "./Proview.css"
import Nave from '../nave/Nave'
import Products from './Products'



function Proview() {
    return (
        <div>

            <Nave />

            <div className='proview-hed-main'>

                <img className='images-ri' src="./Layer 2.png" alt="" />

                <p className='proview-hed-text'  > <span style={{ color: "blue" }} > Products  </span> Within </p>
                <p className='proview-hed-text'  > Your Province </p>

                <img className='images-li' src="./Layer 2.png" alt="" />

                <div className='proview-sel-main' >

                    <select className="select" name="" id="select">

                        <option value=""> select pravince </option>


                    </select>

                </div>

            </div>

            <Products />







        </div>
    )
}

export default Proview
