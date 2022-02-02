import React, { useState } from 'react';

function UpperHook()
 {
     const[name,setName]=useState('rasna');
     const handleclick=()=>
     {
         let updatedname=name.toUpperCase();
         setName(updatedname);
     }
  return( <div>
      <h1>name is {name}</h1>
      <button onClick={handleclick}>changecase</button>
  </div>)
}

export default UpperHook;
