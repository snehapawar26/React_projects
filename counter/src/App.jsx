import React, {useState} from "react";
const App=()=>{
  const [counter,setCounter]=useState(0);
  const handleIncrement=()=>{
    setCounter(counter+1)
  }

  const handleDecrement=()=>{
    setCounter(counter-1)
  }
  const handleReset=()=>{
    setCounter(0)
  }
  return(
<>
{counter}
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
<button onClick={handleReset}>reset</button>
</>
  )
}
export default App