import React, { useState } from 'react';

function CounterHook()
 {
     const[count,setCount]=useState(0);
  return(
   <div>
       <h1>useState hook counter{count}</h1>
       <button onClick={()=>setCount(count+1)}>increment</button>

  </div>)

}

export default CounterHook;
