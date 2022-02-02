import React ,{useState, useEffect}from 'react';
import Unmountcomponent from './unmountcomponent';

function EffectCounter()
 {
     const[name,setName]=useState('');
     const[flag,setFlag]=useState(true);
     useEffect(()=>console.log("mounted"),[]);
     useEffect(()=>console.log("updated"),[name]);
    const handlechange=(e)=>
     {
         setName(e.target.value);
     }
  return <div>
      <input type="text" value={name} onChange={handlechange}></input>
      <button onClick={()=>setName(name=>name.toUpperCase())}>clickme</button>
      {flag?<Unmountcomponent value={name}></Unmountcomponent>:null}
      <button onClick={()=>setFlag(false)}>unmount</button>
  </div>
}

export default EffectCounter;
