import React, {useContext} from 'react';
//import App from '../../App';
import F from './usecontext3';
import {UserContext,ChannelContext} from '../../App';

function E() {
   const user =useContext(UserContext);
   const channel=useContext(ChannelContext);
  return <div>
     {user}{channel} 
     <F></F>
  </div>;
}

export default E;
