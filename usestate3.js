import React, { useState } from 'react';

function ArithmaticHook() 
{
    let initialcount=0;
    const[count,setCount]=useState(initialcount)
    const handlecount=()=>
    {
        for(let i=0;i<10;i++)
        {
            setCount(prevcount=>prevcount+1)
        }
    }
  return <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prevcount=>prevcount+1)}>increment1</button>
      <button onClick={()=>setCount(prevcount=>prevcount-1)}>decrement1</button>
      <button onClick={()=>setCount(initialcount)}>reset</button>
      <button onClick={()=>setCount(prevcount=>prevcount+5)}>increment5</button>
      <button onClick={handlecount}>increment10</button>

  </div>;
}

export default ArithmaticHook;
