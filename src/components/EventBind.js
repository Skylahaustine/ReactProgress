import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hellllo'
      }
    }

//     // This will cause an undefined output
//     clickHandler(){
//         // this.setState({
//         //     message:'Goodbye'
//         // })
//         console.log(this)
//     }
//   render() {
//     return (
//     <div>
//           <div>EventBind</div>
//           <div>{this.state.message}</div>
//           <div><button onClick={this.clickHandler}>Click me event</button></div>
//     </div>
//     )
//   }
// }





//     // APPROACH ONE IS TOU USE THE BIND KEYWORD --perfomance issues
//     clickHandler(){
//         this.setState({
//             message:'Goodbye'
//         })
//         console.log(this)
//     }
//   render() {
//     return (
//     <div>
//           <div>EventBind</div>
//           <div>{this.state.message}</div>
//           <div><button onClick={this.clickHandler.bind(this)}>Click me event</button></div>
//     </div>
//     )
//   }

//   // APPROACH TWO, USING THE ARROW FUNCTION --perfomance issues
//   clickHandler(){
//     this.setState({
//         message:'Goodbye'
//     })
//     console.log(this)
// }
// render() {
// return (
// <div>
//       <div>EventBind</div>
//       <div>{this.state.message}</div>
//       <div><button onClick={()=>this.clickHandler()}>Click me event</button></div>
// </div>
// )
// }


//  // APPROACH THREE, BINDING EVENT HANDLER IN THE CONSTRUCTOR

//  constructor(props) {
//     super(props)
  
//     this.state = {
//        message:'Hellllo'
//     }
//     this.clickHandler=this.clickHandler.bind(this)
//   }


//  clickHandler(){
//     this.setState({
//         message:'Goodbye'
//     })
//     console.log(this)
// }
// render() {
// return (
// <div>
//       <div>EventBind</div>
//       <div>{this.state.message}</div>
//       <div><button onClick={this.clickHandler}>Click me event</button></div>
// </div>
// )
// }




 // APPROACH Four, use the arrow function as a class propperty



 clickHandler= ()=>{
     this.setState({
         message:'So long partner'
     })
 }
render() {
return (
<div>
      <div>EventBind</div>
      <div>{this.state.message}</div>
      <div><button onClick={this.clickHandler}>Click me event</button></div>
</div>
)
}






}


export default EventBind