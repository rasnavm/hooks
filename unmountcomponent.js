import React, { useEffect } from 'react';

function Unmountcomponent(props)

{
    useEffect(()=>{return()=>{console.log('unmounted')}},[]);
  return <div>
        <h1>count is {props.value}</h1>
  </div>
}

export default Unmountcomponent;
