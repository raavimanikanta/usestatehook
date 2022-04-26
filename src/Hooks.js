import React, { useState } from "react"

const Hooks=()=>{
    const [name,setname]=useState("manikanta")
    const [name1,setname1]=useState("kumar")

    const [object,setObj]=useState({
        name:"manikanta",
        age:23,
        college:"pragati college",
        // location:""
    })

    const HandleChange=()=>{
        setname("ManikantaVarma")
    }

    const ChangeObjDetails=()=>{
        setObj((prevState)=>({
            
            ...prevState,
            age:"25",
            location:"hyd"
        }))
    }

    const PreviousState=()=>{
        setname("manikanta")
        setname1("kumar")
    }
    return (
        <>
        <h1>UseState Hook</h1>
        <h2>{name}</h2>
        <h3>{name1}</h3>
        <div>
            <h2>name:{object.name}</h2>
            <h3 style={{color:"red"}}>age:{object.age}</h3>
            <h2>College Details :{object.college},{object.location}</h2>
        </div>

        <button onClick={HandleChange}>Change Name</button>
        <button onClick={()=>setname1("Prasad")}>Change Name2</button>
        <button onClick={PreviousState}>Get Previous States</button>

        <button onClick={ChangeObjDetails}>Obj Change</button>
        </>
    )
}

export default Hooks