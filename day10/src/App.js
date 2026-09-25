import React, { useState } from 'react'
import ImageSlider from './ImageSlider';
import ImageRotation from './ImageRotator';

const App = () => {
  const[count, setCount] = useState(0);
  const decrement = () => {
    setCount(count-1);
  }
  const increment = () => {
    setCount(count + 1);
  }

  const reset = () =>{
    setCount(0);
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{backgroundColor:"black",color:"white"}}>COUNTER APP</h1>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
      <ImageSlider></ImageSlider>
      <ImageRotation></ImageRotation>
    </div>
  )
}



export default App