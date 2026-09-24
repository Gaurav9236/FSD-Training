import React from 'react'

const App = () => {
  let count = 0;
  
  const decrement = () =>{
    count = count-1;
    console.log("dectrement clicked");
    
  }
  const reset = () =>{;
    count = 0
    console.log("reset clicked");
    
  }
  const increment = () =>{
    count = count+1;
    console.log("inctrement clicked");
    
  }
  return (
    <div>
      <h1>Counter App</h1>
      <div></div>

      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App
