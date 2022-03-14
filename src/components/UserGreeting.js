import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn:true
       }
     }
  render() {

    //Approach short circuit
   // this.state.isLoggedIn && <div>Welcome Austine from short circuit</div>
      //Approach ternarry
    return this.state.isLoggedIn ?(
     
             <div>Welcome Austine from User Greeting Function</div>
    ) :(
             <div>Welcome Guest from User Greeting Function</div>
    
     
    )
  }
}

export default UserGreeting