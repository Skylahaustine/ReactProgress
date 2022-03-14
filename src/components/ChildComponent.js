import React from 'react'

function ChildComponent(props) {
  return (
   <div>
       {/* <div> <button onClick={props.greetHandler}>GreetParent    </button></div> */}
       {/* to use parameters I WILL USE THE ARROW OPTION */}
       <div> <button onClick={()=>props.greetHandler('ChildAustine')}>GreetParentwithparameters    </button></div>

   </div>
  )
}

export default ChildComponent