import React, { useEffect, useState } from 'react';

function EffectHook() 
{
    const[count,setCount]=useState(0);
    const[name,setName]=useState('')
    
    useEffect(()=>
    {
        console.log('---updating document title---')
    document.title=`you clicked ${count}times `
},[count]);

  return (<div>
      <button onClick={()=>setCount(count+1)}>count{count}times</button>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
  </div>)
}

export default EffectHook;
