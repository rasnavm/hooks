import React, { useState } from 'react';

function UseStateObj() 
{
    const[name,setName]=useState({firstNmae:"",lastName:""});
  return <div>
      <input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}></input>
      <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}></input>
      <h1>firstName:{name.firstName}  lastname:{name.lastName}</h1>
      </div>;
}

export default UseStateObj;
//usestate as object setstate cannot able to merge the state ,so we need to use spread operator