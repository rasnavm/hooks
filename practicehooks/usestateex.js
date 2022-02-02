import React ,{useState}from 'react';

function UseStateEx()
 {
     const[name,setName]=useState({fName:"",lName:""});
  return (<div>
<input type="text" value={name.fName} onChange={(e)=>setName({...name,fName:e.target.value})}></input>
<input type="text" value={name.lName} onChange={(e)=>setName({...name,lName:e.target.value})}></input>
<h1>firstname:{name.fName} lastName:{name.lName}</h1>
  </div>)
}

export default UseStateEx;
