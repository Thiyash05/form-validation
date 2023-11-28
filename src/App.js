import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './form-validation/Login';
import Signup from './form-validation/Signup';

function App() {
/*Color change use state*/
  const [text , setText]=useState("Black")

const clicktext=()=>{
  setText("Yellow")
}


/*count incre and decre use state*/
const [count, setCount]=useState(0)

const countIncre=()=>{
  setCount(ps=>ps+1)
  setCount(ps=>ps+1)
}
const countDncre=()=>{
  setCount(ps=>ps-1)
  setCount(ps=>ps-1)
}

/*object number incre use State*/
const [color, setColor]=useState({
  number:0,
  color2: "White",
  
})
const {number,color2}=color;

const clickColor=()=>{
  setColor(ps=>{
    return{
      number:ps.number+1
    }
  })
}


/* button click signout para change */
 

const [button , setbutton]=useState(false);
const [message , setMessage]=useState(false);

if(message==false){
  setMessage("Please SignIn")
}

const signIn=()=>{
  setbutton(true)
  setMessage("SignIn sucessfully completed")
}
const signOut=()=>{
  setbutton(false)
  setMessage("Please SignIn")
}



  return (
    <div className="App">
      <h2 className='app-text'>text color change</h2>
      <h3>{text}</h3>
      <button onClick={clicktext}>Click</button>
      

      <h2 className='app-text'>count even incre & decre</h2>
      <h3>{count}</h3>
      <button onClick={countIncre}>Count (+)</button>
      <button onClick={countDncre}>Count (-)</button>


      <h2 className='app-text'>Object</h2>
      <h3>{number}</h3>
      <button onClick={clickColor}>Click</button>


      <h2 className='app-text'>button signIn change signout</h2>
      {(button==false) ? <button onClick={signIn}>Sign in</button> : <button onClick={signOut}>signOut</button>}
      <p>{message}</p>
        

    <Login />
    <Signup />
      
    </div>
  );
}

export default App;
