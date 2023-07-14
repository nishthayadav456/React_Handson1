import React, { useState } from 'react';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';
import './App.css';


function App() {
  const[fstate,setFstate]=useState(false)
  // console.log(fstate)
  const[cstate,setCstate]=useState(false)
  // console.log(cstate)
  return (
   <>
   <h1>Styling Using Functional and Class Component</h1>
  <div className='box1'>
   <button  onClick={()=> setFstate(!fstate)}>To see Styling in functional component</button>
   </div>
   <div className='box2'>
   <button   onClick={()=> setCstate(!cstate)}>To see Styling in class component</button>
   </div>
   {fstate ?< FuncComp/>:" "}
   {cstate ?<ClassComp/>:" "}
   {/* { fstate && <FuncComp/>} */}
   </> 
  );
}

export default App;
