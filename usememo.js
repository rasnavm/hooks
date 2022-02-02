import React, { useMemo, useState } from 'react';

function UseMemoHook() {
    const[counterone,setCounterOne]=useState(0);
    const[countertwo,setCounterTwo]=useState(0);
   const incrementOne=()=>
    {
        setCounterOne(prevcounterone=>prevcounterone+1);
    }
   const incOne=()=>
    {
        setCounterTwo(prevcountertwo=>prevcountertwo+1);
  }
    const isEven = useMemo(()=>
    {   
        let i=0;
        while(i<200000000000)
        {i++
        return counterone%2===0
        }
    },[counterone])

  return <div>
      <div><button onClick={incrementOne}>counterOne{counterone}</button>
      <span>{isEven ?'EVEN':'ODD'}</span></div>
      <button onClick={incOne}>counterTwo{countertwo}</button>
  </div>
}

export default UseMemoHook;
