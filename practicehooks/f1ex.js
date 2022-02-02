import React, { useEffect } from 'react';

function F1ex() {
    useEffect(()=>{return ()=>console.log('unmounted')},[])
  return <div>
      <h1>this for example</h1>
  </div>;
}

export default F1ex;
