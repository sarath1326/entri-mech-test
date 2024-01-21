


import React from 'react'
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";


function Footer() {
  
    return (
    <div>

<div className="footer-detailbox">

<p style={{ color: "black", fontFamily: " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", textAlign: "center", marginTop: "20px" }}
>
    Customer Suport </p>
<p
    style={{ fontFamily: " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", textAlign: "center", marginTop: "20px", color: "black" }}>
    +1 65695 545 65 </p>
<p
    style={{ fontFamily: " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", textAlign: "center", marginTop: "20px", color: "black" }}>
    support@cantaricrop.com </p>

<div style={{ width: "100%", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }} >

    <button className="footer-btn"> Home</button>
    <button className="footer-btn"> About</button>
    <button className="footer-btn">ContactUs</button>
    <button className="footer-btn"> Shop </button>



</div>

<div className="last-box-main">

    <div className="last-text-box">

        <span style={{ fontFamily: " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "10px", color: "rgb(117, 119, 121)" }} > &#169; 2023 Cantari Corp.</span>

        <span style={{ marginLeft: "300px", fontSize: "10px", color: "rgb(117, 119, 121)", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}> Terms of Service </span>

        <span style={{ marginLeft: "10px", fontFamily: " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "10px", color: "rgb(117, 119, 121)" }}> Privacy Policy </span>


    </div>

    <div className="last-icon-box">

        <MdOutlineFacebook className='footer-icons' />
        <FaLinkedin className='footer-icons' />
        < FaTwitter className='footer-icons' />
        < FaInstagram className='footer-icons' />





    </div>


</div>






</div>
      
    </div>
  )
}

export default Footer
