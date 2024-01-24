

import { createContext } from "react";
import { useState } from "react";

export const CartContext=createContext(null);
export const UserContext=createContext(null)




export const Cartprovider=(props)=>{

    const [count,setcount]=useState(0)

    return(

        <CartContext.Provider value={{count,setcount}}>

           {props.children}

        </CartContext.Provider>

    )

}


export const Usernameprovider=(props)=>{

    const [ username,setusername]=useState("Login")


   return(


          <UserContext.Provider value={{username,setusername}}>

            {props.children}


          </UserContext.Provider>
   )


      
}

