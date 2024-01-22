

import React from 'react'
import "./New.css"
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Footer from '../footer/Footer';


function Newcont() {

    return (
        <div>

            <div className='new-cont-main' >

                <div className="content-text-box-main">

                    <div className="content-text-box">

                        <span className="content-text"> unique curry powders </span>

                    </div>

                </div>

                <div className="tagline-box-main">

                    <p className="tagline-text"> Wake Up Your </p>

                    <p className="tagline-text"> Taste Buds With Us </p>




                </div>

                <div className='box' >

                    <div className="box-heding-box-main">

                        <p id="text" className="box-text"> <span style={{ color: "rgb(29, 29, 195)" }}> Products </span> Within </p>

                        <p className="box-text"> Your Province</p>

                        <select className="select" name="" id="select">

                            <option value=""> select pravince </option>


                        </select>

                    </div>

                    <div className="circel-main-left">

                    </div>

                    <img className="image-left" src="./Layer 2.png" alt="loding..." />

                    <div className="circel-main-right">



                    </div>

                    <img className="image-right" src="./Layer 4.png" alt="loding..." />






                    <img className='cercil-image' src="./Frame 3912.png" alt="" />

                    <div className='  img-cover-div' >


                        <div className="container  product-show-main">

                            <div className='productd-show-inner-divbox' >

                                <div className="product-box">
                                    <div className="products-img-box">

                                        <div className="new-box">

                                            {/* <p style={{color:"blue",fontSize:"10px",textAlign:"center",fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}} >
New</p> */}

                                            <span style={{ color: "blue", fontSize: "10px" }} > New </span>

                                        </div>

                                        {/* <img src="test image 5.jpg" style="width: 100% ;height: 100%;" alt=""> */}
                                        <img style={{ width: "150px", height: "150px" }} src=".\Layer 2.png" alt="" />

                                    </div>

                                    <p className="pro-des"> Duck Roast instance curry mix </p>
                                    <div className="pro-under-box">

                                        <div className='grm-box'>

                                            {/* <p style={{color:"blue"}}>  150g </p> */}
                                            <span style={{ color: "blue", fontSize: "15px" }} > 150g </span>

                                        </div>

                                        <div className="arrow-div"> <FaLocationArrow style={{ color: "blue" }} /> </div>

                                    </div>



                                </div>


                                <div className="product-box">
                                    <div className="products-img-box">

                                        <div className="new-box">

                                            {/* <p style={{color:"blue",fontSize:"10px",textAlign:"center",fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}} >
New</p> */}

                                            <span style={{ color: "blue", fontSize: "10px" }} > New </span>

                                        </div>

                                        {/* <img src="test image 5.jpg" style="width: 100% ;height: 100%;" alt=""> */}
                                        <img style={{ width: "150px", height: "150px" }} src=".\Layer 2.png" alt="" />

                                    </div>

                                    <p className="pro-des"> Duck Roast instance curry mix </p>
                                    <div className="pro-under-box">

                                        <div className='grm-box'>

                                            {/* <p style={{color:"blue"}}>  150g </p> */}
                                            <span style={{ color: "blue", fontSize: "15px" }} > 150g </span>

                                        </div>

                                        <div className="arrow-div"> <FaLocationArrow style={{ color: "blue" }} /> </div>

                                    </div>



                                </div>

                                <div className="product-box">
                                    <div className="products-img-box">

                                        <div className="new-box">

                                            {/* <p style={{color:"blue",fontSize:"10px",textAlign:"center",fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}} >
New</p> */}

                                            <span style={{ color: "blue", fontSize: "10px" }} > New </span>

                                        </div>

                                        {/* <img src="test image 5.jpg" style="width: 100% ;height: 100%;" alt=""> */}
                                        <img style={{ width: "150px", height: "150px" }} src=".\Layer 2.png" alt="" />

                                    </div>

                                    <p className="pro-des"> Duck Roast instance curry mix </p>
                                    <div className="pro-under-box">

                                        <div className='grm-box'>

                                            {/* <p style={{color:"blue"}}>  150g </p> */}
                                            <span style={{ color: "blue", fontSize: "15px" }} > 150g </span>

                                        </div>

                                        <div className="arrow-div"> <FaLocationArrow style={{ color: "blue" }} /> </div>

                                    </div>



                                </div>


                                <div className="product-box">
                                    <div className="products-img-box">

                                        <div className="new-box">

                                            {/* <p style={{color:"blue",fontSize:"10px",textAlign:"center",fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}} >
New</p> */}

                                            <span style={{ color: "blue", fontSize: "10px" }} > New </span>

                                        </div>

                                        {/* <img src="test image 5.jpg" style="width: 100% ;height: 100%;" alt=""> */}
                                        <img style={{ width: "150px", height: "150px" }} src=".\Layer 2.png" alt="" />

                                    </div>

                                    <p className="pro-des"> Duck Roast instance curry mix </p>
                                    <div className="pro-under-box">

                                        <div className='grm-box'>

                                            {/* <p style={{color:"blue"}}>  150g </p> */}
                                            <span style={{ color: "blue", fontSize: "15px" }} > 150g </span>

                                        </div>

                                        <div className="arrow-div"> <FaLocationArrow style={{ color: "blue" }} /> </div>

                                    </div>



                                </div>


                            </div>

                        </div >

                        <div className="last-btn-box ">


                            <button className="last-btn-tex"> More Products <FaLocationArrow style={{ marginLeft: "20px" }} /> </button>

                        </div>

                        <p className="last-tag-line"> <span style={{ color: "blue" }}> Cook </span> With Favorite Recipe </p>

                        <div>

                            <div className="resepe-box-main">

                                <span className="resepe-box-hed-text"> YUMMY DUCK ROST <span class="resepe-box-box-text"> Next Recipe > </span> </span>

                                <div className="respe-des-box-main">

                                    <div className="respe-des-box">

                                        <p style={{ color: "rgb(143, 141, 141)", fontSize: " 20px", marginLeft: "30px" }}> <span
                                            style={{ color: "white" }}> Step 01 -----</span> Step 02 ----- Step 03 - </p>

                                        <p style={{ color: "white" }}> is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                            has survived not only five centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of Letraset sheets </p>



                                    </div>

                                    <div className="respe-image-box">

                                        {/* <img style="width: 100%; height: 100%; border-radius: 10px;" src="duck rost.jpg" alt=""> */}
                                        <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src="./image 55.png" alt="" />


                                    </div>
                                    <div className="respe-image-box" >

                                        {/* <img style="width: 100%; height: 100%; border-radius: 10px;" src="duck rost.jpg" alt=""> */}
                                        <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src="./image 55.png" alt="" />


                                    </div>



                                </div>


                                <div className="footer-icon-box-main">

                                    <div style={{ width: "150px", height: "70px" }}>

                                        <img style={{ width: "100%", height: "100%" }} src="./currease logo 1.png" alt="" />

                                    </div>


                                </div>

                                <div className="footer-main">

                                    <Footer />






                                </div>












                            </div>




                        </div>








                    </div>

                </div>











            </div>





        </div>
    )
}

export default Newcont
