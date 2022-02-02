import React, { useEffect, useState } from 'react';
import F1ex from './f1ex';

function UseEffectEx() 
{
    const[count,setCount]=useState(0);
    const[flag,setFlag]=useState(true);
    useEffect(()=>{console.log('===mounted====');},[])
    useEffect(()=>{console.log('---updated----');document.title=`you clicked ${count} times`},[count])
  return <div>
      <button onClick={()=>setCount(count+1)}>click{count}times</button>
      {flag?<F1ex></F1ex>:null}
      <button onClick={()=>setFlag(false)}>unmount</button>
  </div>;
}

export default UseEffectEx;
