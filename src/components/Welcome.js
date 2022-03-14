import React, {Component} from "react";

class Welcome extends Component{
//     render(){
//         return <h1>Welcome{this.props.name} a.k.a {this.props.heroname} to class component</h1>
//     }
// }
// export default Welcome



//destructuring props
render(){
    const{name,heroname}=this.props
    //fake state
   // const{state1,state2}= this.state
    return <h1>Welcome{name} a.k.a {heroname} to class component</h1>
}
}
export default Welcome