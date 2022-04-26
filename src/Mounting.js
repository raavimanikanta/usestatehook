import React, { Component } from "react"

class Mounting extends Component {
    constructor(){
        super();
        this.state={
            name:"iam constructor function of the mounting phase"
        }
    }
       componentDidMount(){
           setTimeout(() => {
               this.setState({
                   name:"iam the ComponentDidMount Function..."
               })
           },5000);
       }
    render(){
        return (
            <>
              <p>{this.state.name}</p>
            </>
        )
    }
}
export default Mounting 