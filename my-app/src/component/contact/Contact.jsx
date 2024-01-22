

import React from 'react'
import "./Contact.css"
import Nave from '../nave/Nave'
import { MdOutlineArrowOutward } from "react-icons/md";
import Footer from '../footer/Footer';

function Contact() {
    return (
        <div>

            <Nave />

            <div className='contact-main'>
                <div className='container contact-inner' >

                    <div className='contact-del-main' >

                        <div className='contact-show-box' >

                            <p className='contact-hed-text' > Cantari Crop india </p>
                            <p className='contact-num-email' > +91 95232 12121 </p>
                            <p className='contact-num-email' > supportind@gmail.com </p>

                        </div>
                        <div className='contact-show-box' >

                            <p className='contact-hed-text' > Cantari Crop UK </p>
                            <p className='contact-num-email' > +44 35232 8910 </p>
                            <p className='contact-num-email' > supportuk@gmail.com </p>

                        </div>
                        <div className='contact-show-box' >

                            <p className='contact-hed-text' > Cantari Crop USA </p>
                            <p className='contact-num-email' > +91 95232 1200 </p>
                            <p className='contact-num-email' > supportusa@gmail.com </p>



                        </div>

                    </div>

                    <p className='contact-msg-title' >  Send us a message </p>

                    <div className='contact-input-main' >

                        <div className='contact-input-div' >

                            <input type="text" placeholder='Your Name' className='contact-input' />

                            <input type="text" placeholder='Phone Number' className='contact-input' />

                            <input type="text" placeholder='Email' className='contact-input' />

                            <input type="text" placeholder='Message' className='contact-input' />


                            <button className='contact-btn'> Send Message <MdOutlineArrowOutward /> </button>


                        </div>


                    </div>

                    <div className='footer-logo-main' >

                        <img style={{ width: "200px", height: "100px" }} src="../currease logo 1.png " alt="" />


                    </div>

                    <Footer />
                    
                    </div>

                   




            </div>

            



        </div>
    )
}

export default Contact
