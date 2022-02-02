import React, { useEffect, useState,useRef } from 'react';

function UseRef2()
 {
     const[timer,setTimer]=useState(0);
     const intervalref=useRef();
     useEffect(()=>{
         intervalref.current=setInterval(()=>{
             setTimer(prevtimer=>prevtimer+1)
         },1000)
         return ()=>{
         clearInterval(intervalref.current);
         };
     },[])

  return <div>
      usehook-{timer}
      <button  onClick={()=>clearInterval(intervalref.current)}>hookimer</button>
  </div>;
}

export default UseRef2;
