import React from 'react';

import {UserContext,ChannelContext} from '../../App';
function F() {
  return <div>
      <UserContext.Consumer>
          {
              user=>
              <ChannelContext.Consumer>
              {
                  channel=>
                  {
                return <div>user context value is {user} channel value is {channel}</div>
                  }
              }
              </ChannelContext.Consumer>
         }
    </UserContext.Consumer>
      
  </div>
}

export default F;
