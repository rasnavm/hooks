import React, { useEffect ,useState} from 'react';
import axios from 'axios';

function Useeffcefetch() {
    const[post,setPost]=useState([]);
    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res=>setPost(res.data))
        .catch(res=>console.log('error'));

    })
  return(
   <div>
       
       <ul>
           {post.map((val)=><li key={val.id}>{val.name}</li>)}
       </ul>

  </div>)


}

export default Useeffcefetch;
