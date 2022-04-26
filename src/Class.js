import React, { Component } from "react" 

class Class extends Component {
    constructor(){
        super();
        console.log("iam constructor function")
    }
    componentDidMount(){
       console.log("Iam component did mount") 
    }
    render(){
        console.log("hii iam render...")
        return (
               <>
               <h1>Class Component</h1>
               </>
        )
    }
        
    
}
export default Class