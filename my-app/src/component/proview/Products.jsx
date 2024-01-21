


import React from 'react'
import "./Proview.css"
import { FaLocationArrow } from "react-icons/fa";
import axios from "axios"
import { useState, useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

function Products() {


    const [result, setresult] = useState([]);
    const [likedata, setlikedata] = useState([]);
    const navigate=useNavigate();



    useEffect(() => {

        axios("https://fakestoreapi.com/products").then((respo) => {

            const res = respo.data.slice(0, 8);
            const like = respo.data.slice(0, 3);
            setresult(res);
            setlikedata(like);
        }).catch(err => {

            alert(err)
        })

    }, []);





    return (
        <div className='products-main' >

            <div className='container products-inner-box '>

                {

                    result.map((obj) => (

                        <div className='pro-view-main' onClick={()=>{navigate(`/view/${obj.id}`)}}>

                            <button className='pro-box-new' >New</button>

                            <div className='pro-view-img-box' >

                                <img style={{ width: "80%", height: "80%" }} src={obj.image} alt="" />

                            </div>

                            <div className='pro-view-text-box'>

                                <span className='pro-text' > {obj.title}   </span>

                                <div className='pro-arro-div' > <FaLocationArrow style={{ color: "blue" }} />  </div>

                                <button className='pro-grm' >150g </button>


                            </div>




                        </div>

                    ))


                }


                <div className='more-btn-main'>

                    <button className='more-btn' > More  <FaArrowDown />   </button>


                </div>

                <div className='like-box-main' >

                    <span className='like-text' > You May <span style={{ color: 'blue' }}> Also Like </span> </span>

                    <div className='left-right-box-1' >

                        < IoIosArrowBack />

                    </div>

                    <div className='left-right-box-2' >

                        < IoIosArrowForward />
                    </div>


                </div>

                {

                    likedata.map((obj) => (

                        <div className='pro-view-main'>

                            <button className='pro-box-new' >New</button>

                            <div className='pro-view-img-box' >

                                <img style={{ width: "80%", height: "80%" }} src={obj.image} alt="" />

                            </div>

                            <div className='pro-view-text-box'>

                                <span className='pro-text' > {obj.title}   </span>

                                <div className='pro-arro-div' > <FaLocationArrow style={{ color: "blue" }} />  </div>

                                <button className='pro-grm' >150g </button>


                            </div>




                        </div>



                    ))


                }


                <div className='logo-main-div'>

                    <img style={{ width: "200px", height: "100px" }} src="./currease logo 1.png" alt="" />

                </div>

                <Footer />



               













            </div>











        </div>
    )
}

export default Products
