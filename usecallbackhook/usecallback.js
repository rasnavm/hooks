import React, { useCallback, useState } from 'react';
import Button from './Button';
import Count from './count';
import Title from './title';

function ParentHook() 
{
    const[age,setAge]=useState(25);
    const[salary,setSalary]=useState(50000);

   const incrementage=useCallback(()=>
    {
      setAge(prevage=>prevage+1);
    },[age]);
    
    const incrementsalary=useCallback(()=>
    {
      setSalary(prevsalary=>prevsalary+1000);
    },[salary])
  return( <div>
            <Title></Title>
            <Count text="Age" count={age}></Count>
            <Button handleclick={incrementage}>increment Age</Button>
            <Count text="salary" count={salary}></Count>
            <Button handleclick={incrementsalary}>increment Salary</Button>
  </div>)
}

export default ParentHook;
