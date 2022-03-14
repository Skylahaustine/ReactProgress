import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    // greetParent(){
    //     //WE USE ES6 HERE JUST FOR KUONYESHANA WE KNOW
    //     alert(`Hello ${this.state.parentName}`)
    // }
//To use parameters
greetParent(childName){
    //WE USE ES6 HERE JUST FOR KUONYESHANA WE KNOW
    alert(`Hello ${this.state.parentName} from ${childName}`)
}

  render() {
    return (
        //add an attribute greethandler and assign the greetparent method NOPARENTHESIS
        //greetHandler is a prop here
      <div><ChildComponent greetHandler= {this.greetParent}/></div>
    )
  }
}

export default ParentComponent