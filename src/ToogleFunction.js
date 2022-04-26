import React, { Component } from "react"

class ToogleFunction extends Component {
    constructor(){
        super();
        this.state={
            display:"true"
        }

    }
          HandleChange=()=>{
            this.setState({
                display:!this.state.display
            })
          }
    render(){
        return (
      <>
      <div>
{  this.state.display ?
    <h1>Manikanta cLASS cOMponent</h1>
    :
    <h1>Manikanta Varma</h1>
}
      <button onClick={this.HandleChange}>Click Here</button>
      </div>
      </>
        )
    }
}
export default ToogleFunction