import React from 'react'

const Test = (props) => {
  return (
    <div>
        <input type="text" onChange={props.onChange} />
    </div>
  )
}

export default Test