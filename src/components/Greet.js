import React from "react";

// function Greet(){
//     return <h1>hello Austines</h1>
// }


//the beter way
// const Greet=() =><h1>Heloo Mr Austine</h1>


//to use props destructured
// const Greet = props => {
//     console.log(props)
//     return (
//         <div>

// <h1>Hello {props.name} a.k.a {props.heroname}
//     </h1>
//     {props.children}
//         </div>
//     )
// }

// export default Greet
//************************************************************************************************************* */

// //using the destructured methodology in the function parameter
// const Greet = ({name,heroname})=> {
    
//     return (
//         <div>

// <h1>Hello {name} a.k.a {heroname}
//     </h1>
    
//         </div>
//     )
// }

// export default Greet



//using the destructured methodology in the function body
const Greet = props=> {
    const {name,heroname}= props
    
    return (
        <div>

<h1>Hello {name} a.k.a {heroname}
    </h1>
    
        </div>
    )
}

export default Greet