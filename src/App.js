import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList></NameList>
      <UserGreeting/>

{/* <ParentComponent/> */}

      {/* <EventBind/>  */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Message/>
      <Message/>
      <Counter/> */}
      {/* <Greet name="Mark" heroname= "naruto"/> */}
      {/* <Greet name="Bruce" heroname= "Kingkong">
        <h1> This is a child prop</h1>
        </Greet>
      <Greet name="Mary" heroname="haidi">
        <button>Action</button>
        </Greet>
      <Greet name="Mark" heroname= "naruto"/>

      
     
      <Welcome name="Bruce" heroname= "Kingkong"/>
      <Welcome name="Baba" heroname= "Mood"/>
      <Welcome name="Paul" heroname= "Realhero"/>
      <Hello></Hello> */}
    
    </div>
  );
}

export default App;
