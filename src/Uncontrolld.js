import React, { useRef } from 'react'

const Uncontrolld = () => {
    const inputRef=useRef("");

    const HandleSubmit=(e)=>{
    e.preventDefault();
    alert(inputRef.current.value)
    }

  return (
    <div>
       <input type="text" ref={inputRef}/>
       <button onClick={HandleSubmit} value="submit">SubmitRef</button>
    </div>
  )
}

export default Uncontrolld