

import React from 'react'
import "./Login.css"
import Nave from '../nave/Nave'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { CartContext } from "../../contextapi/Cart"
import {UserContext} from "../../contextapi/Cart"
import { useNavigate } from 'react-router-dom'


function Login() {

    // const [username, setusername] = useState("");
    // const [password, setpassword] = useState("");
    const { setcount } = useContext(CartContext)
    const {setusername}=useContext(UserContext)

    const navigate=useNavigate()


    const login = () => {

        

        axios('https://fakestoreapi.com/carts/1').then((respo) => {


            const resu = respo.data;
            console.log(resu.products.length);
            setcount(resu.products.length);


            axios('https://fakestoreapi.com/users/1').then((res) => {


                const result = res.data;
                console.log(result.name.firstname)
                setusername(result.name.firstname)
                navigate("/")



            }).catch(err => {

                console.log("err", err)
            })



        }).catch(err => {

            console.log("login err", err)
        })
    }



    return (
        <div>

            <Nave />

            <div className='login-main' >

                <div className='container login-inner-main' >

                    <p className='login-title' > Login  </p>

                    <div className='login-form-main' >

                        <div className='login-input-div' >

                            <input  className='login-input' type="text" placeholder='UserName' />

                            <input  className='login-input' type="text" placeholder='Password' /><br />

                            <button className='login-btn' onClick={login}  > Login </button>


                        </div>


                    </div>


                </div>


            </div>



        </div>
    )
}

export default Login
