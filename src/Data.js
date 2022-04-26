import React,{useEffect} from 'react'
import axios from 'axios'

const Data = () => {
    useEffect(()=>{
        axios.get("https://react-backend-apps.herokuapp.com/api/v1/bollywood").then(response=>{
            console.log(response.data)
        })
    })
  return (
    <div>Data</div>
  )
}

export default Data