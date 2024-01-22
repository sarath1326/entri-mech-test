

import React from 'react'
import "./About.css"
import Nave from '../nave/Nave'
import { MdOutlineArrowOutward } from "react-icons/md";
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';



function About() {

    const navigate=useNavigate()
    return (
        <div>

            <Nave />
            <div className=' about-main' >
                <div className='container about-main-inner ' >
                    <div className='about-det-main' >

                        <div className='about-img-div' >

                            <div className='about-img-inner-div' >
                                <img style={{ width: "100%", height: "100%", borderRadius: "15px" }} src="./shelf1.webp" alt="" />

                            </div>

                            <div className='about-img-inner-div-cen' >

                                <img style={{ width: "100%", height: "100%", borderRadius: "15px" }} src="./shelf2.webp" alt="" />

                            </div>

                            <div className='about-img-inner-div' >

                                <img style={{ width: "100%", height: "100%", borderRadius: "15px" }} src="./shelf1.webp" alt="" />

                            </div>

                        </div>

                        <div className='about-det-div' >

                            <h3 style={{ color: "blue" }} className='about-title' > A Novel Product  </h3>

                            <h3 className='about-title' > In The Food Market. </h3>

                            <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries,containing Lorem
                                Ipsum passages, and more recently.  </p>

                            <button className='about-btn' onClick={()=>{navigate("/proview")}}  > Products <  MdOutlineArrowOutward /> </button>




                        </div>



                    </div>

                    <div className='about-video-main' >

                        <div className='about-vido-text-main' >

                            <div className='about-video' >

                                <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src="../cooking.jpeg" alt="" />

                            </div>

                            <div className='about-video-text' >

                                <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries,containing Lorem
                                    Ipsum passages, and more recently. </p>

                            </div>

                            {/* <div className='footer-logo-main'>

                                <img style={{ width: "200px", height: "100px" }} src="../currease logo 1.png " alt="" />


                            </div> */}

                        </div>




                    </div>

                    <div className='footer-logo-main'>

                        <img style={{ width: "200px", height: "100px" }} src="../currease logo 1.png " alt="" />


                    </div>

                    <Footer />

                </div>





            </div>



        </div>
    )
}

export default About
