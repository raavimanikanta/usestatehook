import axios from "axios";
import React, { useEffect, useState } from "react"
import Test from "./Test";

const Controlld=()=>{
    const [name,setname]=useState(" ");
  
    const HandleChange=(e)=>{
        setname(e.target.value)
    }
    

    return(
        <>
        <h1>name:{name}</h1>

        <input type="text" onChange={HandleChange} />
        <Test onChange={HandleChange}/>
        </>
    )
}
export default Controlld