import { useState } from "react"
import React from 'react'

const ToogleClass = () => {
    const [status,setstatus]=useState("true")

    const HandleChange=()=>{
        setstatus(!status)
    }
  return (
    <div>
         {
             status ? 
             <div>
                 <h1>Manikanta</h1>
             </div>
            :
            <div>
                <h1>WebDevelopment</h1>
            </div>
         }
         <button onClick={HandleChange}>Click HERE</button>
    </div>
  )
}
export default ToogleClass